FROM golang:1-alpine3.15 AS builder

WORKDIR /usr/app

COPY app.go .

RUN go mod init app && go build

FROM scratch
WORKDIR /app
COPY --from=builder /usr/app/app .
CMD [ "/app/app" ]