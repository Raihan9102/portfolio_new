output "namespace" {
  value = kubernetes_namespace.app_namespace.metadata[0].name
}

output "service_name" {
  value = kubernetes_service.app_service.metadata[0].name
}

output "node_port" {
  value = kubernetes_service.app_service.spec[0].port[0].node_port
}