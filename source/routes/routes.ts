
import { helloWorld } from './helloWorld.route';
import { createRoute } from './create.route';
import { updateRoute } from './update.route';
import { deleteCupomRoute } from './deleteCupom.route';

export function routes(){
    return [
        helloWorld,
        createRoute,
        updateRoute,
        deleteCupomRoute,
    ]
}