"use client"
import React, { useState, useRef } from 'react';
import { evaluate } from 'mathjs';
import KeyboardSimbols from '../KeyboardSimbols';
import EmptyTable from '../EmptyTable';

export default function SimpsonThree() {
    const [funcion, setFuncion] = useState('');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [n, setN] = useState(3);  // n debe ser un múltiplo de 3 para Simpson 3/8
    const [resultado, setResultado] = useState(null);
    const [detalles, setDetalles] = useState([]);
    const [showButtons, setShowButtons] = useState(true);
    const [puntosGrafico, setPuntosGrafico] = useState([]);
    const inputRef = useRef(null);

    const calcularIntegral = (e) => {
        e.preventDefault();
        if (n % 3 !== 0) {
            alert("El número de subintervalos (n) debe ser un múltiplo de 3.");
            return;
        }
        const aNum = Number(a);
        const bNum = Number(b);
        const nNum = Number(n);
        const h = (bNum - aNum) / nNum;
        let sum = 0;
        let detalleCalculos = [];
        let puntosParaGrafico = [];

        for (let i = 0; i <= nNum; i++) {
            const x = aNum + i * h;
            const fx = evaluate(funcion.replace(/x/g, `(${x})`));
            let coeficiente = (i === 0 || i === nNum) ? 1 : ((i % 3 === 0) ? 2 : 3);
            const contribucion = coeficiente * fx;
            sum += contribucion;
            detalleCalculos.push({ i, x, fx, coeficiente, contribucion });
            if (i === 0 || i === nNum || i % 3 !== 0) {
                puntosParaGrafico.push({ x, fx });
            }
        }

        const integral = (3 * h / 8) * sum;
        setResultado(integral);
        setDetalles(detalleCalculos);
        setPuntosGrafico(puntosParaGrafico);
    };

    const borrarTodo = () => {
        setFuncion('');
        setA('');
        setB('');
        setN(3);
        setResultado(null);
        setDetalles([]);
    };

    const insertarSimbolo = (simbolo) => {
        const currentPos = inputRef.current.selectionStart;
        const before = funcion.slice(0, currentPos);
        const after = funcion.slice(currentPos);
        setFuncion(before + simbolo + after);
        setTimeout(() => {
            inputRef.current.focus();
            inputRef.current.selectionStart = inputRef.current.selectionEnd = currentPos + simbolo.length;
        }, 0);
    };

    return (
        <div className='flex flex-row gap-6'>
            <div className='flex flex-col gap-8 w-[70%]'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Método de Simpson 3/8</h1>
                <form onSubmit={calcularIntegral}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="flex flex-col">
                            <label htmlFor="funcion-f" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Función F(X)</label>
                            <input ref={inputRef} type="text" id="funcion-f" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#292929] dark:border-[#404040] dark:placeholder-neutral-400 dark:text-white" placeholder="x^4 - 10 + 10" required value={funcion} onChange={e => setFuncion(e.target.value)} />
                            <KeyboardSimbols insertSimbol={insertarSimbolo} />
                        </div>
                        <div>
                            <label htmlFor="limite-inferior-a" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Límite Inferior (a)</label>
                            <input type="number" id="limite-inferior-a" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#292929] dark:border-[#404040] dark:placeholder-gray-400 dark:text-white" placeholder="0" required value={a} onChange={e => setA(Number(e.target.value))} />
                        </div>
                        <div>
                            <label htmlFor="limite-superior-b" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Límite Superior (b)</label>
                            <input type="number" id="limite-superior-b" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#292929] dark:border-[#404040] dark:placeholder-gray-400 dark:text-white" placeholder="10" required value={b} onChange={e => setB(Number(e.target.value))} />
                        </div>
                        <div>
                            <label htmlFor="subintervalos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Subintervalos (n)</label>
                            <input type="number" id="subintervalos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#292929] dark:border-[#404040] dark:placeholder-gray-400 dark:text-white" placeholder="3" required value={n} onChange={e => setN(Number(e.target.value))} />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="submit" className="bg-[#006fff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white transition dark:bg-[#0085ff] dark:hover:bg-blue-600 dark:ring-blue-800">Calcular</button>
                        <button type="button" onClick={borrarTodo} className="bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white transition dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-800">Borrar</button>
                    </div>
                </form>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#1d1d1d] dark:text-white">
                            <tr>
                                <th scope="col" className="py-3 text-center">i</th>
                                <th scope="col" className="py-3 text-center">x</th>
                                <th scope="col" className="py-3 text-center">F(x)</th>
                                <th scope="col" className="py-3 text-center">Coeficiente</th>
                                <th scope="col" className="py-3 text-center">Contribución</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmptyTable data={detalles} columns={5}/>
                            {detalles.map((detalle, index) => (
                                <tr key={index} className="bg-white border-b dark:text-white dark:bg-[#292929] dark:border-[#404040]">
                                    <td className='py-3 text-center'>{detalle.i}</td>
                                    <td className='py-3 text-center'>{detalle.x.toFixed(2)}</td>
                                    <td className='py-3 text-center'>{detalle.fx.toFixed(2)}</td>
                                    <td className='py-3 text-center'>{detalle.coeficiente}</td>
                                    <td className='py-3 text-center'>{detalle.contribucion.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 className="text-xl font-bold mt-8">Puntos para Graficar</h2>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-4">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#1d1d1d] dark:text-white">
                            <tr>
                                <th scope="col" className="py-3 text-center">x</th>
                                <th scope="col" className="py-3 text-center">F(x)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmptyTable data={puntosGrafico} columns={2}/>
                            {puntosGrafico.map((punto, index) => (
                                <tr key={index} className="bg-white border-b dark:text-white dark:bg-[#292929] dark:border-[#404040]">
                                    <td className='py-3 text-center'>{punto.x.toFixed(2)}</td>
                                    <td className='py-3 text-center'>{punto.fx.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-[#f9fafb] dark:bg-[#353535] p-5 rounded-lg w-[30%] h-[95vh]'>
                <h1 className='text-4xl font-extrabold mb-4'>Información de Cálculos</h1>
                <h2 className="text-xl font-bold">Resultado</h2>
                <p className="text-lg dark:text-neutral-300">
                    {resultado !== null ? `La integral de la función desde ${a} hasta ${b} es aproximadamente ${resultado.toFixed(2)}.` : "Ingrese valores para calcular la integral."}
                </p>
            </div>
        </div>
    );
}
