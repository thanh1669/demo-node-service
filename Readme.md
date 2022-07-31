# Demo Node Service
A simple demo `service` on Kubernetes with NodeJS

## Author: Thanh Nguyen
- Personal profile: https://github.com/thanh1669
- Say hello: thanhlocalhost@gmail.com

# Thông tin về ứng dụng

Các biến môi trường:

|   Tên biến   | Điều kiện  | Giá trị mẫu                  |             Diễn giải              |
|--------------|------------|------------------------------|------------------------------------|
| `PORT`       | `required` | 3000                         | Cổng app lắng nghe                 |
| `MONGODB_URI`| `optional` | mongodb://`<sv-name>:<port>` | Uri kết nối tới mongo service      |

Docker image (có thể tự build hoặc sử dụng sẵn image sau):
- `thanh1669/demo-node-service`