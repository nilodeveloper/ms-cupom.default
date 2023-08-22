import * as repository from '../repository/deleteCupom.repository'
export async function run(id: string) {
    try {
        return { 
            message: `deleteCupom here, on id ${id}!`,
            statusCode: 200
        }
    } catch (e) {
        return {
            message: e,
            statusCode: 500
        }
    }
}
