# Single-stage: build and run the Go binary from the same golang image.
# (No multi-stage yet — slimming the final image comes later in the course.)
FROM golang:1.22-alpine AS builder

WORKDIR /app

# Download deps first for better layer caching.
COPY go.mod go.sum ./
RUN go mod download

# Build the binary.
COPY . .
RUN CGO_ENABLED=0 go build -o devboard-backend .

FROM dhi.io/golang:1.22-alpine3.20


#Copy the binary from the builder stage.
COPY --from=builder /app/devboard-backend /app/devboard-backend

EXPOSE 8080

USER nonroot

ENTRYPOINT ["/app/devboard-backend"]
