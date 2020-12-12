import React from 'react'

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiImage,
} from '@elastic/eui'
import { useRouter } from 'next/router'
import uiMsg from 'src/i18/ua_msg'

export const HomePage = () => {
  const router = useRouter()

  return <EuiPage restrictWidth style={{ marginTop: '2rem' }}>
    <EuiFlexGroup direction="row" justifyContent='center' style={{ marginRight: '1rem' }} >
      <EuiFlexItem grow={false} style={{ margin: '1rem' }} >
        <EuiImage
          style={{ margin: 'auto' }}
          size="l"
          hasShadow
          alt="airzoom logo"
          url="/images/airzoom.svg"
        />
      </EuiFlexItem>
      <EuiFlexGroup direction="column" >
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type={'watchesApp'} />}
            title={uiMsg.sensors.info.title}
            description={uiMsg.sensors.info.desc}
            onClick={() => router.push(uiMsg.sensors.path)}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type={'visualizeApp'} />}
            title={uiMsg.measurements.info.title}
            description={uiMsg.measurements.info.desc}
            onClick={() => router.push(uiMsg.measurements.path)}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="xxl" type={'logsApp'} />}
            title={uiMsg.serviceLog.info.title}
            description={uiMsg.serviceLog.info.desc}
            onClick={() => router.push(uiMsg.serviceLog.path)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlexGroup>
  </EuiPage>
}