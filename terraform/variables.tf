variable "kubeconfig_path" {
  type = string
  default = "~/.kube/config"
}

variable "kubeconfig_context" {
  type = string
  default = ""
}

variable "namespace" {
  type = string
  default = "portfolio-staging"
}

variable "app_name" {
  type = string
  default = "portfolio-staging"
}

variable "app_image" {
  type = string
  default = "muhammadraihanthaffanh/portfolio:latest"
}

variable "replica_count" {
  type = number
  default = 1
}

variable "container_port" {
  type = number
  default = 80
}
variable "service_node_port" {
  type = number
  default = 30083
}
variable "enable_hpa" {
  type = bool
  default = false
}
variable "hpa_min_replicas" {
  type = number
  default = 2
}
variable "hpa_max_replicas" {
  type = number
  default = 5
}
