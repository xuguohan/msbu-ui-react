---
order: 0
title: 步骤条
---


````jsx
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;
const Icon = ({ type }) => <span className={`anticon anticon-${type}`} />;

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Steps direction="horizontal" size="small" current={1}>
      <Step title="已完成" description="这里是信息的描述" icon={<Icon type="check-circle-o" />} />
      <Step title="进行中" description="这里是信息的描述" />
      <Step title="待运行" description={<div>这里是用div包的描述信息</div>} />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="已完成" description="这里是信息的描述" icon={<Icon type="check-circle-o" />} />
      <Step title={
        <span style={{ color: 'red' }}>进行中</span>
      } description={
        <div>
          <h4>2016-12-08 14:11</h4>
          <p>你百度钱包已接受退款申请，退款到账时间以查询结果为准</p>
          <p>查询方法：</p>
          <p>登录支付账号或者银行查询，或平交易号9879879872389742387987987，致电 <span style={{ color: 'blue' }}>010-5789976</span>（百度钱包）客服</p>
        </div>
      } icon={
        <span>·</span>
      }
      />
      <Step title="待运行" description="描述信息" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps>
      <Step status="finish" title="步骤1" icon="pay-circle-o" />
      <Step status="process" title="步骤2" icon="pay-circle" />
      <Step status="error" title="步骤3" icon="pay-circle" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="步骤1" icon="pay-circle" description="这里是信息的描述" />
      <Step title="步骤2" icon="pay-circle" description="这里是信息的描述" />
      <Step title="步骤3" icon="pay-circle" description="这里是信息的描述" />
    </Steps>

    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="步骤1" icon={<Icon type="pay-circle" />} />
      <Step title="步骤2" icon="pay-circle" />
      <Step title="步骤3" status="error" icon="pay-circle" />
      <Step title="步骤4" icon="pay-circle" />
    </Steps>
  </WingBlank>
, mountNode);
````
