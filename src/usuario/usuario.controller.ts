import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/createUsuario.dto';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDTO } from './dto/updateUsuario.dto';

@Controller('usuario')
export class UsuarioController {
constructor(private readonly usuarioService:UsuarioService){

}
    @Get()
    listAll(){
        return this.usuarioService.listAll();
    }

    @Post()
    createUser(@Body() body:CreateUsuarioDTO){
        console.log(body)
        return this.usuarioService.createUsuario(body);
    }

    @Put(':id')
    updateUser(@Param('id')id: string, @Body() body: UpdateUsuarioDTO){
        console.log(id, body);
        return this.usuarioService.updateUsuario(id, body)
    }

    @Delete()
    deleteUser(){
        return "Deletar Usuário";
    }
}
