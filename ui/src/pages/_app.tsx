import '../styles/common.scss'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import { EuiErrorBoundary } from '@elastic/eui'

import { AuthProvider } from 'src/components/auth/AuthContext'
import { NotificationProvider } from 'src/components/utils/Notifications'

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <script src="/env.js" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin="*"
      />
      <meta charSet="UTF-8" />
      <title>AirZOOM docs</title>
      <link rel="icon" href="images/favicon.ico"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="AirZOOM - Проєкт спрямований на вирішення проблеми дефіциту об'єктивної і вчасної інформації щодо якості повітря в столиці України, на тлі відсутності системи оперативного інформування громадян щодо шкідливих станів повітря та постійно зростаючого занепокоєння громади, викликаним регулярними інцидентами" />
    </Head>
    <EuiErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </AuthProvider>
    </EuiErrorBoundary>
  </>
)

export default EuiApp
