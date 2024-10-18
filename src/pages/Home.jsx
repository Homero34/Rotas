import './Home.css'

const Home = () => {
  return (
<>
<h1>Pagina Principal</h1>

<p>Aqui esta a pagina principal do meu Layout com uma imagem ilustrativa  alem de uma tabela simples de Processos e Conteudos</p>


<br></br>
<div className="Tabela">

<table>
<tr>

    <th>Nomes</th>
    <th>Endereços</th>
    <th>Cursos</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Rua das Dores</td>
    <td>Arquitetura</td>
  </tr>
  <tr>
    <td>Franchesco Vrrgulii</td>
    <td>Italia</td>
    <td>Corrida Esportiva</td>
  </tr>
  <tr>
    <td>Sonic the headrog</td>
    <td>Ilha dos Aneis Dourados</td>
    <td>Corrida Olimpica</td>
  </tr>
  
</table>


</div>

<img src="https://i.pinimg.com/originals/ee/f0/4e/eef04e7f8d933aa3dd0cb8bb81dca5b3.gif" alt="dance"/>








</>


  )
};

export default Home;