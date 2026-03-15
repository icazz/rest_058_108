---
title: Default module
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# Default module

Base URLs:

# Authentication

# Default

## GET GET Semua Produk setelah DELETE

GET /produk

> Response Examples

> 200 Response

```json
[
  {
    "id": 2,
    "nama": "Mouse Wireless",
    "harga": 250000
  },
  {
    "id": 3,
    "nama": "Keyboard Mekanik",
    "harga": 750000
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST POST Tambah Produk

POST /produk

> Body Parameters

```json
{
  "nama": "Keyboard Mekanik",
  "harga": 750000
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": 3,
  "nama": "Keyboard Mekanik",
  "harga": 750000
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET GET Produk by ID

GET /produk/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": 1,
    "nama": "Laptop",
    "harga": 10000000
  },
  {
    "id": 2,
    "nama": "Mouse",
    "harga": 200000
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## DELETE DELETE Hapus Produk

DELETE /produk/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "message": "Data berhasil dihapus"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT PUT Update Produk

PUT /produk/2

> Body Parameters

```json
{
  "nama": "Mouse Wireless",
  "harga": 250000
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": 2,
  "nama": "Mouse Wireless",
  "harga": 250000
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Data Schema

