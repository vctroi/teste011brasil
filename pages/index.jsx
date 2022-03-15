import React, { useState, useEffect } from "react";
// import styles from "../styles/Home.module.css";
import axios from "axios";
import {
  Box,
  Heading,
  Stack,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Flex,
} from "@chakra-ui/react";

export default function Home() {
  const [prioridade, setPrioridade] = useState();
  const [saude, setSaude] = useState();
  const [alimenticios, setAlimenticios] = useState();
  const [seguranca, setSeguranca] = useState();
  const [educacao, setEducacao] = useState();
  const [outros, setOutros] = useState();

  const prioridadeFunction = async () => {
    let arrayPrioritarios = [];
    let arraySaude = [];
    let arrayAlimenticios = [];
    let arraySeguranca = [];
    let arrayEducacao = [];
    let arrayOutros = [];

    try {
      const response = await axios.get(
        "https://teste11brasil-vctroi.vercel.app/api/data"
      );
      // const response = await axios.get("http://localhost:3000/api/data");
      const res = response.data;

      res.pessoas.forEach((each) => {
        each.idade > 60 == true ? arrayPrioritarios.push(each) : null;
      });

      res.pessoas.forEach((each) => {
        each.areaDeAtuacao == "Saúde" &&
          each.idade <= 60 &&
          arraySaude.push(each);
      });

      res.pessoas.forEach((each) => {
        each.areaDeAtuacao == "Alimentícios" &&
          each.idade <= 60 &&
          arrayAlimenticios.push(each);
      });

      res.pessoas.forEach((each) => {
        each.areaDeAtuacao == "Segurança" &&
          each.idade <= 60 &&
          arraySeguranca.push(each);
      });

      res.pessoas.forEach((each) => {
        each.areaDeAtuacao != "Saúde" &&
          each.areaDeAtuacao != "Alimentícios" &&
          each.areaDeAtuacao != "Segurança" &&
          each.idade <= 60 &&
          arrayEducacao.push(each);
      });

      // res.pessoas.forEach((each) => {
      //   each.areaDeAtuacao == "outros" &&
      //     each.idade <= 60 &&
      //     arrayOutros.push(each);
      // });

      // res.pessoas.forEach((each) => {
      //   console.log(each);
      // });
    } catch (error) {}

    setPrioridade(arrayPrioritarios);
    setSaude(arraySaude);
    setAlimenticios(arrayAlimenticios);
    setSeguranca(arraySeguranca);
    setEducacao(arrayEducacao);
    // setOutros(essenciais);
  };

  useEffect(() => {
    prioridadeFunction();
  }, []);

  {
    /*  */
  }
  return (
    <Flex justifyContent="center">
      <Flex
        direction="column"
        w={{ base: "", sm: "1xl", md: "3xl" }}
        justifyContent="center"
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
          mt="10"
          ml="4"
        >
          Teste LISTA - 011brasil
        </Heading>
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 2, md: 4 }}
          border="1px"
          borderColor="gray.200"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "1xl", sm: "1em", md: "1xl" }}
            mt="4"
            ml="2"
          >
            GRUPO - Prioridade
          </Heading>
          <Table variant="simple">
            <TableCaption>Teste 011brasil</TableCaption>
            <Thead>
              <Tr>
                <Th>Nome: </Th>
                <Th>Idade: </Th>
                <Th>Area de atuação</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prioridade?.map((each) => (
                <>
                  <Tr>
                    <Td key={each.nome}>{each.nome}</Td>
                    <Td>{each.idade}</Td>
                    <Td>{each.areaDeAtuacao}</Td>
                  </Tr>
                </>
              ))}
              <Heading
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "1em", md: "1xl" }}
                mt="4"
                ml="2"
              >
                GRUPO - Saúde
              </Heading>
              {saude?.map((each) => (
                <>
                  <Tr>
                    <Td key={each.nome}>{each.nome}</Td>
                    <Td>{each.idade}</Td>
                    <Td>{each.areaDeAtuacao}</Td>
                  </Tr>
                </>
              ))}
              <Heading
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "1em", md: "1xl" }}
                mt="4"
                ml="2"
              >
                GRUPO - Alimentícios
              </Heading>
              {alimenticios?.map((each) => (
                <>
                  <Tr>
                    <Td key={each.nome}>{each.nome}</Td>
                    <Td>{each.idade}</Td>
                    <Td>{each.areaDeAtuacao}</Td>
                  </Tr>
                </>
              ))}
              <Heading
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "1em", md: "1xl" }}
                mt="4"
                ml="2"
              >
                GRUPO - Segurança
              </Heading>
              {seguranca?.map((each) => (
                <>
                  <Tr>
                    <Td key={each.nome}>{each.nome}</Td>
                    <Td>{each.idade}</Td>
                    <Td>{each.areaDeAtuacao}</Td>
                  </Tr>
                </>
              ))}
              <Heading
                w="100%"
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "1em", md: "1xl" }}
                mt="4"
                ml="2"
              >
                GRUPO - Educação
              </Heading>
              {educacao?.map((each) => (
                <>
                  <Tr>
                    <Td key={each.nome}>{each.nome}</Td>
                    <Td>{each.idade}</Td>
                    <Td>{each.areaDeAtuacao}</Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
        </Stack>
      </Flex>
    </Flex>
  );
}
