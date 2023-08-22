import * as service from '../services/create.service'
export async function run(login: string) {
    try {
        const result = await service.run(login);
        return result;
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
