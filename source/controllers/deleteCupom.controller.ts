import * as service from '../services/deleteCupom.service'
export async function run(id: string) {
    try {
        const result = await service.run(id);
        return result;
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
