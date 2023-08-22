import * as repository from '../repository/update.repository'
export async function run(login: string) {
    try {
        return { 
            message: 'update here!',
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
