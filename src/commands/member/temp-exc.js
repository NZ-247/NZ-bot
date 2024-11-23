const { PREFIX } = require("../../config.js");

module.exports = {
  name: "temp-exc",
  description: "Simula um processo e gera uma imagem com o tempo de execução.",
  commands: ["tempexc", "tpexc" ],
  usage: `${PREFIX}tempexc`,
  handle: async ({ sendReply, sendReact, sendImageFromURL }) => {
    await sendReact("⏱️");

    try {
      // Marca o tempo inicial
      const startTime = Date.now();

      // Simula um processo que leva cerca de 1 segundo
      let sum = 0;
      for (let i = 0; i < 100000000; i++) {
        sum += Math.sqrt(i);
      }

      // Calcula o tempo de execução
      const endTime = Date.now();
      const executionTime = (endTime - startTime) / 1000; // Em segundos

      // Cria a URL da imagem com o tempo de execução
      const imageUrl = `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=Tempo%20de%20Execução&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${executionTime.toFixed(3)}s&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`;

      // Envia a imagem diretamente para o usuário
      sendImageFromURL(imageUrl);
    } catch (error) {
      console.error('Erro ao realizar o teste:', error);
      sendReply('Ocorreu um erro durante o teste.');
    }
  },
};