import { IAplicationService } from "src/core/domain/appService/IAplicationService";
import { Either } from "src/Utils/Either";
import { Usuario } from "../Dominio/AgregadoUsuario";
import { RepositorioUsuario } from "../Dominio/RepositorioUsuario";

export class BuscarUsuariosService implements IAplicationService<null, Iterable<Usuario>>{

    private readonly repositorioUsuario: RepositorioUsuario;

    constructor (
        repositorioUsuario: RepositorioUsuario){
        
        this.repositorioUsuario = repositorioUsuario;
    }

    async execute(): Promise<Either<Iterable<Usuario>, Error>> {
        return await this.repositorioUsuario.buscarUsuarios();
    }
}