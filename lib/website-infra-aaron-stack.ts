import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_certificatemanager, aws_route53, aws_route53_targets} from "aws-cdk-lib";
import {Bucket} from "aws-cdk-lib/aws-s3";
import {
  CloudFrontWebDistribution,
  HttpVersion,
  OriginAccessIdentity,
  PriceClass,
  ViewerProtocolPolicy
} from "aws-cdk-lib/aws-cloudfront";
import {AaaaRecord, ARecord} from "aws-cdk-lib/aws-route53";

export class WebsiteInfraAaronStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const targetDomainName = 'aarondrinksjava.com'

    const hostedZoneATW = new aws_route53.HostedZone(this, 'HostedZoneATW', {
      zoneName: targetDomainName,
    });

  //   const dnsValidatedCertificate = new aws_certificatemanager.DnsValidatedCertificate(this, 'aaronDnsValidatedCertificate', {
  //     domainName: `*.${targetDomainName}`,
  //     hostedZone: hostedZoneATW,

  //     // Must be in us-east-1 for CloudFront!
  //     region: 'us-east-1',
  //     certificateName: 'aaronDnsValidatedCertificate',
  //     subjectAlternativeNames: [`cake.${targetDomainName}`, targetDomainName, `www.${targetDomainName}`],
  //   });

  //   const staticSiteBucket = new Bucket(this, 'StaticSiteBucket', {
  //     bucketName: 'atw-demo-static-site-bucket',
  //     removalPolicy: cdk.RemovalPolicy.RETAIN,
  //   });

  //   // Create Identity for CloudFront to read from the bucket
  //   const staticSiteBucketOriginAccessIdentity = new OriginAccessIdentity(this, 'StaticSiteBucketOriginAccessIdentity', {
  //     comment: 'Static Site Bucket OAI',
  //   })
  //   staticSiteBucket.grantRead(staticSiteBucketOriginAccessIdentity)

  //   const cloudFrontDistribution = new CloudFrontWebDistribution(this, 'cloudFrontDistribution', {
  //     originConfigs: [
  //       {
  //         s3OriginSource: {
  //           s3BucketSource: staticSiteBucket,
  //           originAccessIdentity: staticSiteBucketOriginAccessIdentity,
  //         },
  //         behaviors: [
  //           {
  //             isDefaultBehavior: true,
  //             compress: true,
  //           }

  //         ],
  //       },
  //     ],
  //     viewerCertificate: {
  //       aliases: [targetDomainName],
  //       props: {
  //         acmCertificateArn: dnsValidatedCertificate.certificateArn,
  //         // Always use SNI unless you want to *burn* money on dedicated IPs
  //         sslSupportMethod: 'sni-only',
  //         minimumProtocolVersion: 'TLSv1.2_2021',
  //       }
  //     },
  //     comment: 'Distribution for the Static Site',
  //     enabled: true,
  //     defaultRootObject: 'index.html',
  //     priceClass: PriceClass.PRICE_CLASS_100,
  //     enableIpV6: true,
  //     httpVersion: HttpVersion.HTTP2_AND_3,
  //     viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  //   })

  // const aRecordStaticSite = new ARecord(this, 'AAlliasRecordForStaticSite', {
  //   zone: hostedZoneATW,
  //   target: aws_route53.RecordTarget.fromAlias(new aws_route53_targets.CloudFrontTarget(cloudFrontDistribution)),
  //   recordName: '',
  //   comment: `Alias record for ${targetDomainName}`,
  // });

  // const aaaRecordStaticSite = new AaaaRecord(this, 'AAAAlliasRecordForStaticSite', {
  //   zone: hostedZoneATW,
  //   target: aws_route53.RecordTarget.fromAlias(new aws_route53_targets.CloudFrontTarget(cloudFrontDistribution)),
  //   recordName: '',
  //   comment: `Alias record for ${targetDomainName}`,
  // });
  }

}
