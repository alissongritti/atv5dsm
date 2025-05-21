import { useState } from "react";
import { useLottery } from "../hooks/useLottery";
import { Ball } from "../components/Ball";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BallsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  
  input {
    padding: 8px;
    margin-right: 10px;
    width: 150px;
  }
  
  button {
    padding: 8px 16px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export function Megasena() {
  const { megasena, loading, error, fetchConcursoEspecifico } = useLottery();
  const [concursoInput, setConcursoInput] = useState("");

  const handleSearch = () => {
    if (concursoInput) {
      fetchConcursoEspecifico(Number(concursoInput));
    }
  };

  return (
    <Container>
      <SearchContainer>
        <input
          type="number"
          value={concursoInput}
          onChange={(e) => setConcursoInput(e.target.value)}
          placeholder="Número do concurso"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </SearchContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {loading && <div>Carregando...</div>}

      {megasena && (
        <>
          <h1>Mega-Sena #{megasena.numeroDoConcurso}</h1>
          <BallsContainer>
            {megasena.dezenas.map((dezena, index) => (
              <Ball key={index} number={dezena} />
            ))}
          </BallsContainer>
          <p>Data do sorteio: {megasena.dataPorExtenso}</p>
        </>
      )}
    </Container>
  );
}