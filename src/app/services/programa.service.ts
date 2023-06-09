import { Injectable } from '@angular/core';
import { ProgramaModel } from '@models/programa.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  Programa: ProgramaModel;
  public url : string;
  selectedFile:File = null;


  constructor(
    private _coreService: CoreService,
  ) {}

  public traerProgramas(params = {},) {
    return this._coreService.get<ProgramaModel[]>('programas');
  }


  crearProgramas(programa: any) {
    
    return this._coreService.post<ProgramaModel>('programas', programa);
  }

  eliminarProgramas(programaId: number) {
    return this._coreService.delete('programas/' + programaId);
  }

  
  actualizarProgramas(programa: any) {

    return this._coreService.put('programas/' + programa.id, programa);
  }
}
