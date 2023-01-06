import { useForm } from "react-hook-form"
import * as yup from 'react-hook-form'
import { StyledCreatePost } from "./style"





export const ModalCreatePost = () => {
    
     

     const { register, handleSubmit} = useForm()

     const submit = (data:{}) => {
          console.log(data)
     }


   return(
       <StyledCreatePost>

          <form onSubmit={handleSubmit(submit)} className="createPost" action="">
               <div className="form-header">
                    <h4>Novo post</h4>
                    <span><img src="" alt="closeModal" /></span>
               </div>
               <div className="form-title">
                    <label htmlFor="">Título</label>
                    <input type="text" placeholder="Digite aqui o título" {...register('title')} />
               </div>
               <div className="form-description">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Digite aqui o título" {...register('description')} />
               </div>
               <div className="form-post-category">
                    <label htmlFor="">Categoria</label>
                    <select id="" {...register('category')}>
                         <option value="Roupas">Roupas</option>
                         <option value="Brinquedos">Brinquedos</option>
                         <option value="Moveis">Moveis</option>
                         <option value="Eletro">Eletro</option>
                    </select>
               </div>
               <div className="form-post-type">
                    <label htmlFor="">Escolha o nível da postagem</label>
                    <select id="" {...register('type')}>
                         <option value="Fazer doacao">Fazer doacao</option>
                         <option value="Solicitar doacao">Solicitar doação</option>
                    </select>
               </div>
               <div className="form-post-image">
                    <label htmlFor="">Adicione uma imagem (opcional)</label>
                    <input type="text" placeholder="Adicionar imagem" {...register('image')} />
               </div>
               <div className="form-button">
                    <button>Publicar</button>
                    <button>Cancelar</button>
               </div>
          </form>

       </StyledCreatePost>
   )
}
