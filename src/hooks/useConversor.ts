export function converterParaReal(numero:any) {
    const valorEmCentavos = numero / 100; 
    const valorFormatado = valorEmCentavos.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return valorFormatado;
  }
