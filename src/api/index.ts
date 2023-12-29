import Request from '@/service'

export const getAddressConfig = () => Request({ url: '/form.json', method: 'get' })
export const saveAddressConfig = (params: any) => Request({ url: '/01.php', method: 'post', data: params })
