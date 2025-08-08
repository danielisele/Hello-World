#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack'; // ✅ must match the export in lib

const app = new cdk.App();
new CdkStack(app, 'CdkStack');


/* If you don't specify 'env', this stack will be environment-agnostic.
 * Account/Region-dependent features and context lookups will not work,
 * but a single synthesized template can be deployed anywhere.
 *
 * Uncomment the appropriate line below if you want to specialize this stack.
 */

// To specialize for the AWS Account and Region from the CLI config:
// new CdkStack(app, 'CdkStack', {
//   env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
// });

// Or, to specify exact account and region:
// new CdkStack(app, 'CdkStack', {
//   env: { account: '123456789012', region: 'us-west-1' },
// });
