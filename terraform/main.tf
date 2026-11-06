# 1. Namespace
resource "kubernetes_namespace" "app_namespace" {
  metadata {
    name = var.namespace
    labels = {
      "app.kubernetes.io/name"    = var.app_name
      "app.kubernetes.io/part-of" = var.app_name
    }
  }
}

# 2. Deployment
resource "kubernetes_deployment" "app_deployment" {
  metadata {
    name      = "${var.app_name}-app"
    namespace = kubernetes_namespace.app_namespace.metadata[0].name
    labels = {
      "app.kubernetes.io/name"      = var.app_name
      "app.kubernetes.io/component" = "frontend"
    }
  }

  spec {
    replicas = var.replica_count

    strategy {
      type = "RollingUpdate"
      rolling_update {
        max_surge       = "1"
        max_unavailable = "0"
      }
    }

    selector {
      match_labels = {
        "app.kubernetes.io/name"      = var.app_name
        "app.kubernetes.io/component" = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          "app.kubernetes.io/name"      = var.app_name
          "app.kubernetes.io/component" = "frontend"
        }
      }

      spec {
        container {
          name              = var.app_name
          image             = var.app_image
          image_pull_policy = "IfNotPresent"

          port {
            name           = "http"
            container_port = var.container_port
          }

          resources {
            requests = {
              cpu    = "50m"
              memory = "64Mi"
            }
            limits = {
              cpu    = "200m"
              memory = "128Mi"
            }
          }

          liveness_probe {
            http_get {
              path = "/"
              port = "http"
            }
            initial_delay_seconds = 5
            period_seconds        = 10
          }

          readiness_probe {
            http_get {
              path = "/"
              port = "http"
            }
            initial_delay_seconds = 3
            period_seconds        = 5
          }
        }
      }
    }
  }
}

# 3. Service
resource "kubernetes_service" "app_service" {
  metadata {
    name      = "${var.app_name}-service"
    namespace = kubernetes_namespace.app_namespace.metadata[0].name
    labels = {
      "app.kubernetes.io/name" = var.app_name
    }
  }

  spec {
    type = "NodePort"

    selector = {
      "app.kubernetes.io/name"      = var.app_name
      "app.kubernetes.io/component" = "frontend"
    }

    port {
      name        = "http"
      port        = 80
      target_port = var.container_port
      node_port   = var.service_node_port
    }
  }
}

# 4. HPA (Hanya aktif jika enable_hpa = true)
resource "kubernetes_horizontal_pod_autoscaler_v2" "app_hpa" {
  count = var.enable_hpa ? 1 : 0

  metadata {
    name      = "${var.app_name}-hpa"
    namespace = kubernetes_namespace.app_namespace.metadata[0].name
  }

  spec {
    min_replicas = var.hpa_min_replicas
    max_replicas = var.hpa_max_replicas

    scale_target_ref {
      api_version = "apps/v1"
      kind        = "Deployment"
      name        = kubernetes_deployment.app_deployment.metadata[0].name
    }

    metric {
      type = "Resource"
      resource {
        name = "cpu"
        target {
          type                = "Utilization"
          average_utilization = 70
        }
      }
    }
  }
}