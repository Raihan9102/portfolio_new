namespace         = "portfolio-staging"
app_name          = "portfolio-staging"
app_image         = "muhammadraihanthaffanh/portfolio:latest"
replica_count     = 1
container_port    = 80
service_node_port = 30083
enable_hpa        = false