import { useEffect, useState } from "react";
import api from "../services/api";

interface MegaSenaResult {
    concurso: number;
    data_do_sorteio: string;
    bola1: number;
    bola2: number;
    bola3: number;
    bola4: number;
    bola5: number;
    bola6: number;
}

interface LotteryResult {
    numeroDoConcurso: number;
    dezenas: string[];
    dataPorExtenso: string;
}

export function useLottery() {
    const [megasena, setMegasena] = useState<LotteryResult | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para formatar os dados do backend
    const formatData = (data: MegaSenaResult): LotteryResult => {
        return {
            numeroDoConcurso: data.concurso,
            dezenas: [
                data.bola1.toString().padStart(2, '0'),
                data.bola2.toString().padStart(2, '0'),
                data.bola3.toString().padStart(2, '0'),
                data.bola4.toString().padStart(2, '0'),
                data.bola5.toString().padStart(2, '0'),
                data.bola6.toString().padStart(2, '0')
            ],
            dataPorExtenso: new Date(data.data_do_sorteio).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
    };

    // Busca o último concurso
    const fetchUltimoConcurso = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get("/");
            setMegasena(formatData(response.data));
        } catch (err) {
            setError("Erro ao carregar dados da Mega-Sena");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Busca um concurso específico
    const fetchConcursoEspecifico = async (numero: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`/${numero}`);
            setMegasena(formatData(response.data));
        } catch (err) {
            setError(`Não existem dados do concurso ${numero}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Busca o último concurso ao carregar
    useEffect(() => {
        fetchUltimoConcurso();
    }, []);

    return {
        megasena,
        loading,
        error,
        fetchConcursoEspecifico
    };
}