import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";

export class MuckCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, "PLANTS_TABLE", {
      partitionKey: { name: "_id", type: dynamodb.AttributeType.STRING }
    });
  }
}
