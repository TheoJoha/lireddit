import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entities/Post"


const main = async () => {

    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'lireddit',
        // user: '',
        // password: ''
        type: 'postgresql',
        debug: !__prod__,
    })

}

main()