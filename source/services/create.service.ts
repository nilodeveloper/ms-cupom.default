import * as repository from '../repository/create.repository'
export async function run(login: string) {
    try {
        return { 
            message: 'create here!',
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
