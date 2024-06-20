import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const recipes = [
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/escondidinho-de-frango-10.jpg",
      name: "Escondidinho de frango",
      category: "jantar",
      portion: "5 porções",
      timer: "40min",
      ingredients: [
        "2 colheres de sopa de óleo",
        "1 cebola pequena picada",
        "2 xícaras de chá de frango cozido e desfiado",
        "1/2 lata de ervilha em conserva escorrida",
        "1/2 lata de milho em conserva escorrido",
        "Orégano a gosto",
        "Pimenta do reino a gosto",
        "1 sachê de tempero para frango",
        "Sal a gosto",
        "1 sachê de molho de tomate",
        "1 kg de batatas cozidas e amassadas",
        "1 caixinha de creme de leite",
        "50 gramas de queijo parmesão ralado",
        "Sal a gosto",
        "Azeite a gosto",
        "Queijo parmesão fresco",
      ],
      preparations: [
        "Reúna todos os ingredientes;",
        "Em uma panela, aqueça o óleo e refogue a cebola. Depois, acrescente o frango, a ervilha e o milho. Tempere com orégano, pimenta, tempero para frango, sal e misture bem;",
        "Acrescente o molho de tomate; misture novamente; tampe e deixe cozinhar por 5 minutos. Feito isso, desligue o fogo e reserve;",
        "Em uma tigela, misture as batatas com o creme de leite e o queijo parmesão ralado. Acerte o sal;",
        "Selecione uma travessa que possa ir ao forno e unte-a com azeite;",
        "Faça uma camada generosa e uniforme de purê de batata;",
        "Faça outra camada com todo o frango;",
        "E mais uma camada com o restante do purê;",
        "Para finalizar, rale o queijo parmesão fresco por cima;",
        "Leve o escondidinho para assar em forno pré-aquecido a 180° graus por 15 minutos. Passado o tempo, retire do forno e está pronto para servir.",
      ],
    },
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/frango-frito-supercrocante-0.png",
      name: "Frango frito supercrocante",
      category: "jantar",
      portion: "10 unidades",
      timer: "40min",
      ingredients: [
        "500 gramas de filé de frango (sassami)",
        "1 colher de chá de páprica doce",
        "1/2 colher de chá de pimenta-do-reino",
        "1 colher de chá de alho em pó",
        "Sal a gosto",
        "1 e ½ xícara de chá de farinha de trigo",
        "1 colher de chá de páprica doce",
        "1 colher de chá de alho em pó",
        "1 colher de chá de pimenta-do-reino",
        "Sal a gosto",
        "Água gelada",
      ],
      preparations: [
        "Reúna os ingredientes para o frango;",
        "Em um recipiente, adicione os filés de frango, a páprica, a pimenta, o alho em pó o sal, misture bem, tampe e deixe na geladeira por cerca de 30 minutos;",
        "Reúna os ingredientes para empanar;",
        "Em outra tigela, coloque a farinha, a páprica, a pimenta, o alho, o sal e misture bem;",
        "Disponhas os filés na farinha, feche o recipiente e chacoalhe bem para empanar. Reserve os que já estão empanados e repita o processo até acabarem os filés;",
        "Separe a água gelada em um pote;",
        "Passe rapidamente os filés na água gelada (um por um) e depois empane novamente na mistura de farinhas. Repita o processo até acabar;",
        "Frite em óleo quente de 6 a 8 minutos;",
        "Deixe os filés secarem em cima de uma grade e sirva.",
      ],
    },
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/atum-com-crosta-de-quinoa.jpg",
      name: "Atum com crosta de quinoa",
      category: "jantar",
      portion: "3 porções",
      timer: "45min",
      ingredients: [
        "100 gramas de quinoa",
        "500 ml de água",
        "Sal e pimenta-do-reino a gosto",
        "500 gramas de lombo de atum",
        "Azeite para fritar",
        "1/4 de xícara de chá de molho shoyu",
        "Suco de limão a gosto",
        "Vinagre a gosto",
        "1 colher de sobremesa de óleo de gergelim",
        "1 pedaço (1 cm) de gengibre ralado",
        "Cebolinha a gosto",
      ],
      preparations: [
        "Reúna os ingredientes do atum com crosta de quinoa;",
        "Para preparar o atum, cozinhe a quinoa na água com sal por cerca de 15 minutos, contados após levantar fervura;",
        "Em seguida, escorra e tempere com sal e pimenta;",
        "Tempere também o atum com sal e pimenta;",
        "Passe o atum na crosta de quinoa;",
        "Sele o atum em uma frigideira com azeite quente por cerca de 30 a 45 segundos de cada lado - mais que isso corre o risco do atum ficar seco. O ponto correto é quando a maior parte central ficar rosado como na cor original;",
        "Quando a crosta estiver dourada e o atum com pontas brancas, retire da frigideira e deixe descansar;",
        "Para fazer o molho, misture todos os ingredientes em um recipiente;",
        "Despeje por cima do atum já pronto;",
        "Sirva com o arroz branco ou macarrão. Bom apetite!",
      ],
    },
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/ceviche-de-tilapia-facil-04.jpg",
      name: "Ceviche de tilápia fácil",
      category: "jantar",
      portion: "10 porções",
      timer: "80min",
      ingredients: [
        "500 g de filé de tilápia",
        "1 cebola roxa grande",
        "1 pimenta dedo-de-moça",
        "1 lata de milho verde",
        "Sal a gosto",
        "5 limões taiti",
        "2 tomates sem sementes cortados em cubos",
        "Coentro a gosto",
        "Azeite de oliva a gosto",
      ],
      preparations: [
        "Reúna todos os ingredientes;",
        "Corte os filés de peixe em cubos e a cebola e a pimenta em fatias finas; neste processo, retire as sementes da pimenta;",
        "Junte o peixe, a cebola, o milho, a pimenta e o sal numa tigela; em seguida, adicione o suco de limão, misture, leve a tigela à geladeira e deixe lá por cerca de 1 hora para que o peixe possa marinar;",
        "Depois, acrescente o tomate, o coentro, um fio de azeite e sirva!",
      ],
    },
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/bacalhau-ao-forno.jpeg",
      name: "Bacalhau ao forno",
      category: "jantar",
      portion: "6 a 8 porç.",
      timer: "30min",
      ingredients: [
        "500 gramas de bacalhau",
        "6 batatas médias cortadas em fatias e cozidas",
        "2 cebolas grandes em rodelas",
        "1 pimentão pequeno amarelo em rodelas",
        "1 pimentão pequeno vermelho em rodelas",
        "1 pimentão pequeno verde em rodelas",
        "1 tomate picado em rodelas",
        "4 ovos cozidos picados",
        "3 dentes de alho picados",
        "Sal a gosto",
        "Cheiro-verde a gosto",
        "Azeite a gosto",
        "Azeitonas a gosto",
      ],
      preparations: [
        "Reúna todos os ingredientes;",
        "Em uma panela grande, coloque o azeite, o alho e deixe dourar;",
        "Adicione a cebola em rodelas até murchar;",
        "Em seguida, coloque os pimentões, os tomates, os temperos e o cheiro-verde. Misture e Refogue;",
        "Despeje o bacalhau já dessalgado e desfiado na panela e incorpore com o restante dos ingredientes;",
        "Deixe cozinhar por 2 minutos, desligue o fogo;",
        "Em uma travessa de ir ao forno, acomode as batatas cozidas no fundo;",
        "Coloque o refogado por cima e regue com muito azeite;",
        "Decore com os ovos cozidos e fatiados, as azeitonas e leve ao forno preaquecido a 180 °C por 10 minutos;",
        "Sirva e bom apetite.",
      ],
    },
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/sardinha-na-panela-de-pressao.jpeg",
      name: "Sardinha na panela de pressão",
      category: "jantar",
      portion: "4 porções",
      timer: "15min",
      ingredients: [
        "500 gramas de sardinhas",
        "1/2 sachê de molho pronto de tomate",
        "1/2 cebola média",
        "2 colheres de sopa de azeite ou óleo",
        "2 dentes de alho amassados",
        "1 e 1/2 colher de chá de sal",
        "400 ml de água",
        "Coentro ou salsa a gosto",
      ],
      preparations: [
        "Reúna todos os ingredientes;",
        "Em uma panela de pressão, coloque o azeite fora do fogo",
        "Disponha as sardinhas sobre a base da panela e coloque o alho amassado;",
        "Salpique o coentro, o sal e coloque as cebolas por cima;",
        "Despeje o molho de tomate;",
        "Coloque água até que cubra a sardinha, tampe a panela e leve ao fogo alto até pegar pressão. Quando pegar pressão, coloque em fogo médio e deixe cozinhar por 10 minutos;",
        "Sirva e bom apetite!",
      ],
    },
    {
      urlImage:
        "https://www.receiteria.com.br/wp-content/uploads/iscas-de-peixe.jpeg",
      name: "Iscas de peixe",
      category: "jantar",
      portion: "5 porções",
      timer: "40min",
      ingredients: [
        "500 gramas de filé de peixe",
        "1/2 colher de sopa de sal",
        "Pimenta-do-reino a gosto",
        "Suco de 1 limão",
        "2 dentes de alho picados ou amassados",
        "120 gramas de farinha de trigo",
        "120 gramas de fubá",
        "Óleo para fritar",
      ],
      preparations: [
        "Reúna todos os ingredientes;",
        "Em uma tábua, corte os peixes em iscas;",
        "Leve o peixe fatiado a um recipiente e tempere com sal, pimenta-do-reino, suco de limão e alho;",
        "Feche o recipiente com plástico filme, ou uma tampa apropriada, e deixe marinar na geladeira por 20 minutos;",
        "Em outro recipiente, misture a farinha de trigo com o fubá;",
        "Empane os peixes nessa mistura de secos e reserve;",
        "Em uma panela, coloque óleo suficiente para fritar os peixes;",
        "Assim que estiver bem quente, frite as iscas por imersão;",
        "Depois de fritas, acomode-as em um papel toalha para escorrer o excesso de óleo;",
        "Está pronto! Bom apetite.",
      ],
    },
  ];

  for (const recipe of recipes) {
    const createdRecipe = await prisma.recipe.create({
      data: {
        name: recipe.name,
        urlImage: recipe.urlImage,
        category: recipe.category,
        cookTimer: recipe.timer,
        ingredients: recipe.ingredients,
        instructions: recipe.preparations,
        portion: recipe.portion,
      },
    });

    console.log(`Created recipe with id: ${createdRecipe.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
