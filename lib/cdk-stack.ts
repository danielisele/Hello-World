import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props); // ✅ Correct use of `this` starts here

    const vpc = new ec2.Vpc(this, 'HelloVpc', {
      maxAzs: 2,
    });

    const cluster = new ecs.Cluster(this, 'HelloCluster', {
      vpc,
    });

    new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'HelloService', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
      desiredCount: 2,
      publicLoadBalancer: true,
    });

  } // ✅ Close constructor
}   // ✅ Close class
