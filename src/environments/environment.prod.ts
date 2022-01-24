import { AppConfig } from '@core/config/app-config'

export const environment: AppConfig = {
    production: true,
    apiURL: '',
    sanity: {
        projectId: '<#< sanity.projectId >#>',
        dataset: 'production',
        useCdn: true,
    },
    web: {
        url: '<#< deployments.web.url >#>',
    },
}
