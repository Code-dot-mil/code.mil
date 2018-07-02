terraform {
  backend "s3" {}
}

locals {
  domain = "code.mil"
  name   = "codemil"
}

provider "aws" {}

resource "aws_s3_bucket" "cm_bucket_logs" {
  acl           = "log-delivery-write"
  bucket        = "www.${local.domain}-logs"
  force_destroy = true

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }
}

resource "aws_s3_bucket" "cm_bucket_builds" {
  bucket        = "builds.${local.domain}"
  force_destroy = true

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }
}

resource "aws_s3_bucket" "cm_bucket_www" {
  bucket        = "www.${local.domain}"
  force_destroy = true

  logging {
    target_bucket = "${aws_s3_bucket.cm_bucket_logs.bucket}"
  }

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket" "cm_bucket_beta" {
  bucket        = "beta.${local.domain}"
  force_destroy = true

  logging {
    target_bucket = "${aws_s3_bucket.cm_bucket_logs.bucket}"
  }

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_acm_certificate" "cm_certificate" {
  domain_name               = "${local.domain}"
  subject_alternative_names = ["*.${local.domain}"]
  validation_method         = "DNS"

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }
}

resource "aws_cloudfront_distribution" "cm_distribution_www" {
  aliases = ["${local.domain}", "www.${local.domain}"]
  enabled = true

  default_cache_behavior {
    allowed_methods = ["HEAD", "GET"]
    cached_methods  = ["HEAD", "GET"]
    compress        = false
    default_ttl     = 0

    forwarded_values {
      cookies {
        forward = "none"
      }

      query_string = "false"
    }

    target_origin_id       = "www.${local.domain}"
    viewer_protocol_policy = "redirect-to-https"
  }

  origin {
    domain_name = "${aws_s3_bucket.cm_bucket_www.website_endpoint}"
    origin_id   = "www.${local.domain}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }

  viewer_certificate {
    acm_certificate_arn = "${aws_acm_certificate.cm_certificate.arn}"
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_distribution" "cm_distribution_beta" {
  aliases = ["beta.${local.domain}"]
  enabled = true

  default_cache_behavior {
    allowed_methods = ["HEAD", "GET"]
    cached_methods  = ["HEAD", "GET"]
    compress        = false
    default_ttl     = 0

    forwarded_values {
      cookies {
        forward = "none"
      }

      query_string = "false"
    }

    target_origin_id       = "beta.${local.domain}"
    viewer_protocol_policy = "redirect-to-https"
  }

  origin {
    domain_name = "${aws_s3_bucket.cm_bucket_beta.website_endpoint}"
    origin_id   = "beta.${local.domain}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags {
    Name = "${local.name}"
    Project = "${local.domain}"
  }

  viewer_certificate {
    acm_certificate_arn = "${aws_acm_certificate.cm_certificate.arn}"
    ssl_support_method  = "sni-only"
  }
}
