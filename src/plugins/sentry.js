import Vue from 'vue';
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    Vue,
    dsn: 'URL_DO_SEU_PROJETO',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export default Sentry;
