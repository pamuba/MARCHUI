import { BUY_CAKE } from './cakeTypes'

export const buyCake = (num=1) => {
    return {
        type:BUY_CAKE,
        payload:num
    }
}