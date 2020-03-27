#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { MuckCdkStack } from "../lib/muck_cdk-stack";

const app = new cdk.App();
new MuckCdkStack(app, "MuckCdkStack", {
  env: {
    region: "us-east-1",
    account: "147928954574"
  }
});
