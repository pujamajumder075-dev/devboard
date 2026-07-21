FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 go build -o devboard-backend .

FROM alpine:3.20

COPY --from=builder /app/devboard-backend /app/devboard-backend

RUN chmod +x /app/devboard-backend

EXPOSE 8080

ENTRYPOINT ["/app/devboard-backend"]