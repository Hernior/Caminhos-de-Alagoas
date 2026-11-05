(() => {
  "use strict";

  const cities = [
    {
      name: "Piaçabuçu",
      slug: "piacabucu",
      photo: {
        "src": "assets/cities/piacabucu.jpg",
        "alt": "Barcos na margem do rio São Francisco, em Piaçabuçu.",
        "author": "Miltonviegas",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pia%C3%A7abu%C3%A7u_(Rio_S%C3%A3o_Francisco).JPG"
      },
      visitStatus: "Desembarque registrado",
      lat: -10.407753,
      lng: -36.435382,
      elevation: 0,
      verifiedPlaque: true,
      description: "Ponto verificado da placa física do Caminho do Imperador em Piaçabuçu.",
      history: "Em 14 de outubro de 1859, D. Pedro II desembarcou em Piaçabuçu ao entrar no rio São Francisco. Registrou a recepção com música de rabecas, observou as casas da então freguesia e a paisagem da foz antes de seguir rio acima.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=16" }],
      region: "Conheça a foz do rio São Francisco, onde o Velho Chico encontra o Atlântico. Piaçabuçu é a base para observar essa paisagem de dunas, rio e mar; a visita pode ser combinada com o trecho litorâneo da Praia do Peba.",
      regionSources: [{ label: "ICMBio", url: "https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/marinho/lista-de-ucs/apa-de-piacabucu/arquivos/apa_piacabucu.pdf" }]
    },
    {
      name: "Penedo",
      slug: "penedo",
      photo: {
        "src": "assets/cities/penedo.jpg",
        "alt": "Vista aérea do centro histórico e da Catedral de Penedo.",
        "author": "Nathanael De Melo Araujo",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Centro_Hist%C3%B3rico,_Penedo-AL,_Brasil.jpg"
      },
      visitStatus: "Visita registrada",
      lat: -10.290822,
      lng: -36.586380,
      elevation: 7,
      verifiedPlaque: true,
      description: "Ponto verificado da placa física do Caminho do Imperador em Penedo.",
      history: "D. Pedro II chegou a Penedo em 14 de outubro de 1859. Foi recebido no porto, participou de cerimônia no Convento de São Francisco e percorreu a cidade, registrando a Câmara, as igrejas e a navegação no rio.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=16" }],
      region: "Percorra o centro histórico à margem do São Francisco: o Paço Imperial, a Igreja das Correntes, os casarões e a orla permitem conhecer diferentes épocas da cidade. A Rocheira oferece outra vista desse conjunto urbano.",
      regionSources: [{ label: "Prefeitura de Penedo", url: "https://penedo.al.gov.br/2024/07/05/pontos-turisticos-do-centro-historico-de-penedo-ganham-nova-iluminacao/" }]
    },
    {
      name: "Porto Real do Colégio",
      slug: "porto-real-do-colegio",
      photo: {
        "src": "assets/cities/porto-real-do-colegio.jpg",
        "alt": "Orla de Porto Real do Colégio junto ao rio São Francisco.",
        "author": "Autor não identificado",
        "license": "CC0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Porto_real_colegio_vista_do_Rio_S%C3%A3o_Francisco_orla.jpg"
      },
      visitStatus: "Visita registrada",
      lat: -10.188428,
      lng: -36.839223,
      elevation: 6,
      verifiedPlaque: true,
      description: "Ponto verificado da placa física do Caminho do Imperador em Porto Real do Colégio.",
      history: "Na subida do São Francisco, em 16 de outubro de 1859, o imperador visitou Porto Real do Colégio, diante de Propriá. Em seu diário, anotou a existência de uma antiga igreja e de um convento jesuíta que já haviam desaparecido.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=20" }],
      region: "Conheça a Igreja Matriz de Nossa Senhora da Conceição e a paisagem da margem alagoana do São Francisco, em frente a Propriá. A matriz preserva a referência ao antigo núcleo formado em torno da missão jesuíta.",
      regionSources: [{ label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/porto-real-do-colegio" }]
    },
    {
      name: "São Brás",
      slug: "sao-bras",
      photo: {
        "src": "assets/cities/sao-bras.jpg",
        "alt": "Vista do centro e da igreja de São Brás.",
        "author": "Ray Duarte",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Centro_da_cidade_de_S%C3%A3o_Br%C3%A1s_Alagoas,_ano_de_2016.jpg"
      },
      visitStatus: "Observado do rio",
      lat: -10.1141,
      lng: -36.8522,
      elevation: null,
      verifiedPlaque: false,
      description: "Município da rota. Coordenada atual representa a sede municipal; ponto exato da placa ainda não confirmado.",
      history: "Em 16 de outubro de 1859, D. Pedro II parou diante de São Brás. Descreveu a povoação, suas igrejas de São Brás e do Rosário e uma escola de meninos. A parada aparece expressamente em seu diário de viagem.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=21" }],
      region: "Em São Brás, observe a paisagem ribeirinha e conheça a tradição religiosa ligada ao padroeiro da cidade. A festa de São Brás, celebrada em fevereiro, é uma referência cultural local; fora desse período, vale percorrer o pequeno núcleo urbano.",
      regionSources: [{ label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/sao-bras" }]
    },
    {
      name: "Traipu",
      slug: "traipu",
      photo: {
        "src": "assets/cities/traipu.jpg",
        "alt": "Vista aérea de Traipu e do rio São Francisco.",
        "author": "Mauriciograv",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Traipuaereo.png"
      },
      visitStatus: "Visita registrada",
      lat: -9.971902,
      lng: -37.001545,
      elevation: 8,
      verifiedPlaque: true,
      description: "Ponto verificado da placa física do Caminho do Imperador em Traipu.",
      history: "D. Pedro II chegou a Traipu na noite de 16 de outubro de 1859 e ficou hospedado na casa da Câmara. Na manhã seguinte, visitou a matriz, as escolas e as lagoas onde se plantava arroz, além de desenhar uma vista do rio.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=21" }],
      region: "Passeie pelas ruas de casario antigo e pela margem do São Francisco. A prainha e as croas, bancos de areia que surgem no rio, são os atrativos naturais destacados para Traipu.",
      regionSources: [{ label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/traipu" }]
    },
    {
      name: "Belo Monte",
      slug: "belo-monte",
      photo: {
        "src": "assets/cities/belo-monte.jpg",
        "alt": "Vista de Belo Monte à margem do rio São Francisco.",
        "author": "Joannes Paulus",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Belo_Monte_-_Alagoas.jpg"
      },
      visitStatus: "Visita à região atual",
      lat: -9.8227,
      lng: -37.2770,
      elevation: null,
      verifiedPlaque: false,
      description: "Município da rota. Coordenada atual representa a sede municipal; ponto exato da placa ainda não confirmado.",
      history: "O território do atual município de Belo Monte integrava a paisagem percorrida pelo imperador em 1859. Seu diário registra a visita ao morro da capela de Nossa Senhora dos Prazeres, junto à Barra do Ipanema, e a passagem por Lagoa Funda. A sede atual ainda não era chamada Belo Monte.",
      historySources: [
        { label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=22" },
        { label: "Histórico do IBGE", url: "https://www.ibge.gov.br/biblioteca/visualizacao/dtb/alagoas/belomonte.pdf" }
      ],
      region: "A praia fluvial do São Francisco e o pequeno terminal turístico são referências para conhecer a paisagem de Belo Monte. A Barra do Ipanema, onde os rios se encontram, ajuda a compreender a formação histórica da região.",
      regionSources: [{ label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/belo-monte" }]
    },
    {
      name: "Pão de Açúcar",
      slug: "pao-de-acucar",
      photo: {
        "src": "assets/cities/pao-de-acucar.jpg",
        "alt": "Vista da cidade de Pão de Açúcar e de sua orla.",
        "author": "Júlio C. Silva",
        "license": "Public domain",
        "licenseUrl": "https://commons.wikimedia.org/wiki/Commons:Public_domain",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:P%C3%A3o_de_A%C3%A7%C3%BAcar_(12).jpg"
      },
      visitStatus: "Visita registrada",
      lat: -9.750112,
      lng: -37.435620,
      elevation: 11,
      verifiedPlaque: true,
      description: "Ponto verificado da placa física do Caminho do Imperador em Pão de Açúcar.",
      history: "D. Pedro II chegou a Pão de Açúcar em 17 de outubro de 1859 e recebeu simbolicamente a chave da vila. Hospedou-se na casa da Câmara e, antes de prosseguir para Piranhas, observou as ruas e a matriz. Voltou a passar pela vila no retorno da cachoeira.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=23" }],
      region: "Conheça a prainha do São Francisco e a Ilha do Ferro, povoado conhecido pelo artesanato em madeira e pelos bordados. O passeio reúne paisagem ribeirinha, gastronomia e trabalho dos artesãos locais.",
      regionSources: [
        { label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/pao-de-acucar" },
        { label: "Banco do Nordeste", url: "https://www.bnb.gov.br/s482-dspace/bitstream/123456789/816/1/2002_LIV_ADAN.pdf" }
      ]
    },
    {
      name: "Piranhas",
      slug: "piranhas",
      photo: {
        "src": "assets/cities/piranhas.jpg",
        "alt": "Igreja e escadaria no centro histórico de Piranhas.",
        "author": "Marinelson Almeida",
        "license": "CC BY 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Centro_Hist%C3%B3rico_de_Piranhas_-_Alagoas_(17014585711).jpg"
      },
      visitStatus: "Desembarque registrado",
      lat: -9.6240,
      lng: -37.7570,
      elevation: null,
      verifiedPlaque: false,
      description: "Município da rota. Coordenada atual representa a sede municipal; ponto exato da placa ainda não confirmado.",
      history: "Em 18 de outubro de 1859, o vapor Pirajá levou D. Pedro II até Piranhas de Cima, no trecho pedregoso do São Francisco. Dali, a comitiva deixou a navegação e seguiu a cavalo em direção à Cachoeira de Paulo Afonso.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=24" }],
      region: "Caminhe pelo centro histórico de Piranhas e pela orla do São Francisco. Do atracadouro parte a Rota do Cangaço, passeio fluvial que pode incluir uma trilha até a região da Grota do Angico.",
      regionSources: [{ label: "Turismo de Piranhas", url: "https://turismo.piranhas.al.gov.br/rota-do-cangaco" }]
    },
    {
      name: "Olho d’Água do Casado",
      slug: "olho-dagua-do-casado",
      photo: {
        "src": "assets/cities/olho-dagua-do-casado.jpg",
        "alt": "Paisagem do rio São Francisco em Olho d’Água do Casado.",
        "author": "Paulo JC Nogueira",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Olho_d%27%C3%81gua_do_Casado_-_AL,_Brazil_-_panoramio_(1).jpg"
      },
      visitStatus: "Relação local incerta",
      lat: -9.5036,
      lng: -37.8301,
      elevation: null,
      verifiedPlaque: false,
      description: "Município da rota. Coordenada atual representa a sede municipal; ponto exato da placa ainda não confirmado.",
      history: "O atual município de Olho d’Água do Casado ainda não existia como povoado na viagem de 1859. O diário cita uma fazenda chamada Olhos d’Água no percurso a cavalo, mas as fontes consultadas não permitem identificá-la com a sede atual. A formação do povoado local ocorreu depois, ligada à ferrovia.",
      historySources: [
        { label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=24" },
        { label: "Histórico do IBGE", url: "https://www.ibge.gov.br/biblioteca/visualizacao/dtb/alagoas/olhodaguadocasado.pdf" }
      ],
      region: "Olho d’Água do Casado reúne paisagens dos cânions do São Francisco e sítios de arte rupestre no Assentamento Nova Esperança. Visitas aos sítios arqueológicos devem respeitar as orientações de conservação e o acesso organizado pela comunidade.",
      regionSources: [
        { label: "Prefeitura de Olho d’Água do Casado", url: "https://olhodaguadocasado.al.gov.br/home/olho-dagua-do-casado-passa-a-integrar-o-mapa-do-turismo-brasileiro/" },
        { label: "Iphan", url: "https://www.gov.br/iphan/pt-br/assuntos/noticias/assentamento-nova-esperanca-al-alia-conservacao-do-patrimonio-arqueologico-ao-desenvolvimento-territorial/" }
      ]
    },
    {
      name: "Delmiro Gouveia",
      slug: "delmiro-gouveia",
      photo: {
        "src": "assets/cities/delmiro-gouveia.jpg",
        "alt": "Paisagem dos cânions do São Francisco em Delmiro Gouveia.",
        "author": "Paulo JC Nogueira",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Delmiro_Gouveia_-_State_of_Alagoas,_Brazil_-_panoramio_(1).jpg"
      },
      visitStatus: "Referência à região atual",
      lat: -9.3841,
      lng: -37.9978,
      elevation: null,
      verifiedPlaque: false,
      description: "Município da rota. Coordenada atual representa a sede municipal; ponto exato da placa ainda não confirmado.",
      history: "Em 1859, D. Pedro II atravessou o sertão rumo à Cachoeira de Paulo Afonso, na região que hoje inclui Delmiro Gouveia. A cidade ainda não existia com esse nome: o povoado de Pedra e sua ligação com o industrial Delmiro Gouveia surgiram décadas depois. O registro da visita imperial refere-se à cachoeira, não à sede atual.",
      historySources: [
        { label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=26" },
        { label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/delmiro-gouveia" }
      ],
      region: "Conheça o Museu Delmiro Gouveia para entender a história industrial da antiga Pedra. A região também oferece a paisagem dos cânions do São Francisco e o legado da Usina de Angiquinho.",
      regionSources: [
        { label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/delmiro-gouveia" },
        { label: "Prefeitura de Delmiro Gouveia", url: "https://delmirogouveia.al.gov.br/em-reuniao-com-diretoria-da-chesf-a-prefeita-ziane-costa-alinha-o-inicio-do-processo-de-uso-do-complexo-de-angiquinho-para-o-turismo-local/" }
      ]
    },
    {
      name: "Água Branca",
      slug: "agua-branca",
      photo: {
        "src": "assets/cities/agua-branca.jpg",
        "alt": "Fachada da Igreja Matriz de Nossa Senhora da Conceição, em Água Branca.",
        "author": "Joannes Paulus",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Igreja_Matriz_de_Nossa_Senhora_da_Concei%C3%A7%C3%A3o_-_%C3%81gua_Branca_AL.jpg"
      },
      visitStatus: "Mencionada, sem visita à sede",
      lat: -9.2620,
      lng: -37.9380,
      elevation: null,
      verifiedPlaque: false,
      description: "Município da rota. Coordenada atual representa a sede municipal; ponto exato da placa ainda não confirmado.",
      history: "Água Branca já era uma povoação quando D. Pedro II viajou pelo sertão, em 1859. Ele a menciona no diário ao descrever o sítio e as frutas de seu guia, o major Calaça, mas não relata uma visita à sede. O ponto integra hoje a rota de memória da viagem.",
      historySources: [{ label: "Diário de D. Pedro II", url: "https://museuimperial.museus.gov.br/wp-content/uploads/2020/09/VOL02.pdf#page=24" }],
      region: "Explore o centro histórico serrano: a Igreja Matriz, a Igrejinha do Rosário, a Casa do Barão e as praças preservam a arquitetura antiga. A Serra do Himalaia completa o passeio com a paisagem natural de Água Branca.",
      regionSources: [{ label: "Assembleia Legislativa de AL", url: "https://www.al.al.leg.br/municipios/agua-branca" }]
    }
  ];

  const hospitality = [
    {
      stays: [{ name: "Viana Praia Hotel", place: "Pontal do Peba, Piaçabuçu", url: "https://www.booking.com/hotel/br/viana-praia-piacabucu12345.pt-br.html" }],
      food: [{ name: "Restaurante Viana", place: "Pontal do Peba, Piaçabuçu", url: "https://www.booking.com/hotel/br/viana-praia-piacabucu12345.pt-br.html" }]
    },
    {
      stays: [
        { name: "Hotel São Francisco", place: "Penedo", url: "https://www.booking.com/hotel/br/sao-francisco-penedo.pt-pt.html" },
        { name: "Hotel Rochedo", place: "Penedo", url: "https://www.booking.com/hotel/br/rochedo.pt-br.html" }
      ],
      food: [
        { name: "Restaurante Oratório", place: "Penedo", url: "https://penedo.al.gov.br/2023/01/08/comidas-que-unem-bom-sabor-e-apreciacao-das-belezas-de-penedo/" },
        { name: "Restaurante Forte da Rocheira", place: "Penedo", url: "https://penedo.al.gov.br/2023/01/08/comidas-que-unem-bom-sabor-e-apreciacao-das-belezas-de-penedo/" }
      ]
    },
    {
      stays: [{ name: "Pousada do Gil", place: "Porto Real do Colégio", url: "https://www.sluurpy.com.br/porto-real-do-col%C3%A9gio/restaurante/1622566/pousada-e-restaurante-do-gil" }],
      food: [{ name: "Restaurante do Gil", place: "Porto Real do Colégio", url: "https://www.tripadvisor.es/Restaurants-g5257069-Porto_Real_do_Colegio_State_of_Alagoas.html" }]
    },
    {
      stays: [{ name: "Pousada e Restaurante Manah", place: "Propriá, SE (cidade próxima)", url: "https://www.booking.com/hotel/br/pousada-e-restaurante-manah.pt-pt.html" }],
      food: [{ name: "Restaurante Manah", place: "Propriá, SE (cidade próxima)", url: "https://www.booking.com/hotel/br/pousada-e-restaurante-manah.pt-pt.html" }]
    },
    {
      stays: [{ name: "Chácara Flor do Sertão", place: "Traipu", url: "https://restaurantguru.com.br/Chacara-Flor-do-Sertao-Pousada-e-Restaurante-Brazil" }],
      food: [{ name: "Restaurante Flor do Sertão", place: "Traipu", url: "https://restaurantguru.com.br/Chacara-Flor-do-Sertao-Pousada-e-Restaurante-Brazil" }]
    },
    {
      stays: [{ name: "Pousada Prazeres do Velho Chico", place: "Barra do Ipanema, Belo Monte", url: "https://www.booking.com/hotel/br/pousada-prazeres-do-velho-chico.pt-br.html" }],
      food: [{ name: "Oxente Preciosa", place: "Belo Monte", url: "https://www.tripadvisor.com.pe/Restaurant_Review-g5257075-d26542009-Reviews-Oxente_Preciosa-Belo_Monte_State_of_Alagoas.html" }]
    },
    {
      stays: [{ name: "Casa Cacto Pousada", place: "Ilha do Ferro, Pão de Açúcar", url: "https://www.booking.com/hotel/br/casa-cacto.pt-br.html" }],
      food: [{ name: "Churrascaria e Peixaria do Pinto", place: "Pão de Açúcar", url: "https://www.tripadvisor.com.br/Restaurants-g2351320-Pao_De_Acucar_State_of_Alagoas.html" }]
    },
    {
      stays: [
        { name: "Pousada Porto de Piranhas", place: "Piranhas", url: "https://turismo.piranhas.al.gov.br/hospedagens" },
        { name: "Pousada Trilha do Velho Chico", place: "Piranhas", url: "https://turismo.piranhas.al.gov.br/hospedagens" },
        { name: "Hotel Pedra do Sino", place: "Piranhas", url: "https://turismo.piranhas.al.gov.br/hospedagens" }
      ],
      food: [
        { name: "Restaurante Canoa de Tolda", place: "Piranhas", url: "https://turismo.piranhas.al.gov.br/culinaria" },
        { name: "Nalva Cozinha Autoral", place: "Piranhas", url: "https://turismo.piranhas.al.gov.br/culinaria" },
        { name: "Restaurante Lampião", place: "Piranhas", url: "https://turismo.piranhas.al.gov.br/culinaria" }
      ]
    },
    {
      stays: [
        { name: "Cânions Hotel", place: "Olho d’Água do Casado", url: "https://canionshotel.com.br/" },
        { name: "Hotel Virgulino", place: "Olho d’Água do Casado", url: "https://visitealagoas.com.br/hospedagens/hotel-virgulino" }
      ],
      food: [{ name: "Restaurante do Hotel Virgulino", place: "Olho d’Água do Casado", url: "https://visitealagoas.com.br/hospedagens/hotel-virgulino" }]
    },
    {
      stays: [{ name: "Bristol Aline Alagoas", place: "Delmiro Gouveia", url: "https://www.booking.com/hotel/br/aline-delmiro-gouveia.pt-br.html" }],
      food: [
        { name: "Marfim Restaurante", place: "Delmiro Gouveia", url: "https://visitedelmirogouveia.com.br/" },
        { name: "Restaurante do Bristol Aline", place: "Delmiro Gouveia", url: "https://www.booking.com/hotel/br/aline-delmiro-gouveia.pt-br.html" }
      ]
    },
    {
      stays: [{ name: "Caza Fortes", place: "Água Branca", url: "https://www.booking.com/hotel/br/caza-fortes-cabana-da-baronesa.tl.html" }],
      food: [{ name: "Restaurante Engenho São Lourenço", place: "Água Branca", url: "https://engenhosaolourenco.com.br/o-restaurante/" }]
    }
  ];

  const el = {
    cityList: document.getElementById("cityList"),
    cityName: document.getElementById("cityName"),
    cityDescription: document.getElementById("cityDescription"),
    cityPermalink: document.getElementById("cityPermalink"),
    cityHistory: document.getElementById("cityHistory"),
    cityVisitStatus: document.getElementById("cityVisitStatus"),
    cityHistorySources: document.getElementById("cityHistorySources"),
    cityRegion: document.getElementById("cityRegion"),
    cityRegionSources: document.getElementById("cityRegionSources"),
    cityStays: document.getElementById("cityStays"),
    cityFood: document.getElementById("cityFood"),
    cityPrevCity: document.getElementById("cityPrevCity"),
    cityNextCity: document.getElementById("cityNextCity"),
    cityGoogleLink: document.getElementById("cityGoogleLink"),
    cityWazeLink: document.getElementById("cityWazeLink"),
    coordinates: document.getElementById("coordinates"),
    osmLink: document.getElementById("osmLink"),
    progressText: document.getElementById("progressText"),
    fitRoute: document.getElementById("fitRoute"),
    playRoute: document.getElementById("playRoute"),
    routeMode: document.getElementById("routeMode"),
    routeDistance: document.getElementById("routeDistance"),
    routeDistanceLabel: document.getElementById("routeDistanceLabel"),
    routeNoteText: document.getElementById("routeNoteText"),

    mobileMenuToggle: document.getElementById("mobileMenuToggle"),
    mobileMenuClose: document.getElementById("mobileMenuClose"),
    mobileBackdrop: document.getElementById("mobileBackdrop"),
    routeSidebar: document.getElementById("routeSidebar"),
    mobileFitRoute: document.getElementById("mobileFitRoute"),

    mobileCityCard: document.getElementById("mobileCityCard"),
    mobileActiveCity: document.getElementById("mobileActiveCity"),
    mobileCityName: document.getElementById("mobileCityName"),
    mobileCityStatus: document.getElementById("mobileCityStatus"),

    mobileBottomSheet: document.getElementById("mobileBottomSheet"),
    mobileSheetHandle: document.getElementById("mobileSheetHandle"),
    mobileSheetCity: document.getElementById("mobileSheetCity"),
    mobileSheetDescription: document.getElementById("mobileSheetDescription"),
    mobileSheetPermalink: document.getElementById("mobileSheetPermalink"),
    mobileSheetHistory: document.getElementById("mobileSheetHistory"),
    mobileSheetVisitStatus: document.getElementById("mobileSheetVisitStatus"),
    mobileSheetHistorySources: document.getElementById("mobileSheetHistorySources"),
    mobileSheetRegion: document.getElementById("mobileSheetRegion"),
    mobileSheetRegionSources: document.getElementById("mobileSheetRegionSources"),
    mobileSheetStays: document.getElementById("mobileSheetStays"),
    mobileSheetFood: document.getElementById("mobileSheetFood"),
    mobileSheetGoogleLink: document.getElementById("mobileSheetGoogleLink"),
    mobileSheetWazeLink: document.getElementById("mobileSheetWazeLink"),
    mobileSheetCoordinates: document.getElementById("mobileSheetCoordinates"),
    mobileSheetElevation: document.getElementById("mobileSheetElevation"),
    mobileSheetOsmLink: document.getElementById("mobileSheetOsmLink"),
    mobilePrevCity: document.getElementById("mobilePrevCity"),
    mobileNextCity: document.getElementById("mobileNextCity")
  };

  if (typeof L === "undefined" || typeof protomapsL === "undefined") {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div style="position:fixed;z-index:99999;inset:12px auto auto 12px;background:#7f1d1d;color:white;padding:12px 16px;border-radius:10px;font:14px system-ui">Não foi possível carregar o mapa.</div>'
    );
    return;
  }

  const map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true
  });

  const tiles = protomapsL.leafletLayer({
    url: "alagoas.pmtiles",
    flavor: "dark",
    lang: "pt",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  tiles.on("loading", () => console.info("[tiles] loading"));
  tiles.on("load", () => console.info("[tiles] load"));
  tiles.on("tileerror", (event) => {
    console.error("[tiles] tileerror", event.tile && event.tile.src, event.error);
  });
  tiles.addTo(map);

  const latLngs = cities.map((city) => [city.lat, city.lng]);

  const fullRoute = L.polyline(latLngs, {
    color: "#d39a32",
    weight: 5,
    opacity: 0.72,
    dashArray: "10 9",
    lineCap: "round"
  }).addTo(map);

  const completedRoute = L.polyline([], {
    color: "#7c4d00",
    weight: 8,
    opacity: 1,
    lineCap: "round"
  }).addTo(map);

  const markers = [];
  let activeIndex = 0;
  let activeRoutePoints = latLngs;
  let activeMilestones = cities.map((_, index) => index);
  const routeSources = {
    "moto-asfalto": {
      file: "rota-moto-asfalto.gpx",
      label: "Moto · Asfalto",
      note: "Traçado para moto em asfalto criado pelo autor do projeto. Os marcadores das cidades mantêm suas coordenadas de referência. Confira as condições atuais das vias antes de seguir."
    },
    "bike-misto": {
      file: "rota-bike-misto.gpx",
      label: "Bike · Misto",
      note: "Traçado misto para bicicleta criado pelo autor do projeto. Os marcadores das cidades mantêm suas coordenadas de referência. Confira as condições atuais das vias antes de seguir."
    }
  };
  const loadedRoutes = {};
  const playbackSpeed = 3000; // Metros por segundo na simulação.
  const cityPauseMs = 1000;
  const vehicle = L.marker(latLngs[0], {
    icon: vehicleIcon("schematic"),
    title: "Veículo percorrendo a rota",
    interactive: false,
    zIndexOffset: 1000
  });
  let playFrame = null;
  let playing = false;
  let refreshFrame = null;
  let fitPending = false;

  function isMobile() {
    return window.matchMedia("(max-width: 760px)").matches;
  }

  function refreshMapSize(fitRoute = false) {
    fitPending = fitPending || fitRoute;
    if (refreshFrame !== null) return;

    refreshFrame = window.requestAnimationFrame(() => {
      refreshFrame = null;
      const container = map.getContainer();
      if (!container.clientWidth || !container.clientHeight) return;

      map.invalidateSize({ pan: false, debounceMoveend: true });
      if (fitPending) {
        fitPending = false;
        map.fitBounds(fullRoute.getBounds(), {
          paddingTopLeft: isMobile() ? [28, 88] : [48, 48],
          paddingBottomRight: isMobile() ? [28, 110] : [48, 48]
        });
      }
    });
  }

  function fitWholeRoute() {
    refreshMapSize(true);
  }

  function vehicleIcon(mode) {
    const icons = { schematic: "🚗", "moto-asfalto": "🏍️", "bike-misto": "🚲" };
    return L.divIcon({
      className: "route-vehicle",
      html: icons[mode] || icons.schematic,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });
  }

  function setRouteMode(mode) {
    const route = loadedRoutes[mode];
    if (mode !== "schematic" && !route) return;

    stopPlaying();
    vehicle.setIcon(vehicleIcon(mode));
    activeRoutePoints = route ? route.points : latLngs;
    activeMilestones = route
      ? route.milestones
      : cities.map((_, index) => index);

    fullRoute.setLatLngs(activeRoutePoints);
    fullRoute.setStyle({ dashArray: route ? null : "10 9" });
    selectCity(activeIndex, false);

    if (el.routeDistance) {
      el.routeDistance.textContent = route ? `${route.distanceKm} km` : "~350 km";
    }
    if (el.routeDistanceLabel) {
      el.routeDistanceLabel.textContent = route ? "rota informada" : "track de referência";
    }
    if (el.routeNoteText) {
      el.routeNoteText.textContent = route
        ? route.note
        : "Os pontos com indicação ‘placa verificada’ usam coordenadas lidas diretamente nos registros fotográficos fornecidos. Os demais ainda usam a sede municipal como referência. A ligação entre cidades é esquemática e não substitui um arquivo GPX ou navegação viária.";
    }

    setMobileMenu(false);
    fitWholeRoute();
  }

  function setMobileMenu(open) {
    if (document.body.classList.contains("mobile-menu-open") === open) return;
    if (open) setMobileSheet(false);
    const focusWasInside = el.routeSidebar?.contains(document.activeElement);

    document.body.classList.toggle("mobile-menu-open", open);
    if (el.routeSidebar) {
      el.routeSidebar.inert = !open;
      el.routeSidebar.setAttribute("aria-hidden", open ? "false" : "true");
    }

    if (el.mobileMenuToggle) {
      el.mobileMenuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    if (el.mobileBackdrop) {
      el.mobileBackdrop.hidden = !open;
    }

    if (open) el.mobileMenuClose?.focus();
    else if (focusWasInside) el.mobileMenuToggle?.focus();

    refreshMapSize();
  }

  function setMobileSheet(open) {
    if (!el.mobileBottomSheet || !el.mobileCityCard) return;
    if (document.body.classList.contains("mobile-sheet-open") === open) return;
    if (open) setMobileMenu(false);
    const focusWasInside = el.mobileBottomSheet.contains(document.activeElement);

    el.mobileBottomSheet.classList.toggle("open", open);
    el.mobileBottomSheet.setAttribute("aria-hidden", open ? "false" : "true");
    el.mobileBottomSheet.inert = !open;

    el.mobileCityCard.classList.toggle("sheet-open", open);
    el.mobileCityCard.setAttribute("aria-expanded", open ? "true" : "false");

    document.body.classList.toggle("mobile-sheet-open", open);

    if (open) el.mobileSheetCity?.focus();
    else if (focusWasInside) el.mobileCityCard.focus();

    refreshMapSize();
  }

  function markerIcon(index, verified) {
    return L.divIcon({
      className: `numbered-marker ${verified ? "verified-marker" : "approx-marker"} marker-${index}`,
      html: verified
        ? `📍${String(index + 1).padStart(2, "0")}`
        : String(index + 1).padStart(2, "0"),
      iconSize: [verified ? 42 : 32, 32]
    });
  }

  function stopPlaying() {
    if (playFrame !== null) {
      window.cancelAnimationFrame(playFrame);
      playFrame = null;
    }

    playing = false;

    updatePlaybackButtons();
  }

  function updatePlaybackButtons() {
    document.querySelectorAll(".route-play").forEach((button) => {
      const label = playing ? "Parar percurso" : "Percorrer rota";
      button.textContent = label;
      button.classList.toggle("is-playing", playing);
      button.setAttribute("aria-label", label);
      button.title = label;
    });
  }

  function showSourceLinks(container, sources) {
    if (!container) return;
    container.replaceChildren();
    const label = document.createElement("span");
    label.textContent = sources.length === 1 ? "Fonte:" : "Fontes:";
    container.appendChild(label);
    sources.forEach((source) => {
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = source.label + " ↗";
      container.appendChild(link);
    });
  }

  function showHospitality(container, items) {
    if (!container) return;
    container.replaceChildren();
    items.forEach((item) => {
      const row = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = item.name;
      const place = document.createElement("span");
      place.textContent = item.place;
      const source = document.createElement("a");
      source.href = item.url;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Fonte ↗";
      row.append(name, place, source);
      container.appendChild(row);
    });
  }

  function showPointNavigation(googleLink, wazeLink, city) {
    const destination = `${city.lat},${city.lng}`;
    const bikeMode = el.routeMode?.value === "bike-misto";
    const googleUrl = new URL("https://www.google.com/maps/dir/");
    googleUrl.searchParams.set("api", "1");
    googleUrl.searchParams.set("destination", destination);
    googleUrl.searchParams.set("travelmode", bikeMode ? "bicycling" : "driving");
    googleUrl.searchParams.set("dir_action", "navigate");

    if (googleLink) {
      googleLink.href = googleUrl.href;
      googleLink.setAttribute("aria-label", `Navegar até ${city.name} pelo Google Maps`);
    }
    if (wazeLink) {
      const wazeUrl = new URL("https://waze.com/ul");
      wazeUrl.searchParams.set("ll", destination);
      wazeUrl.searchParams.set("navigate", "yes");
      if (el.routeMode?.value === "moto-asfalto") {
        wazeUrl.searchParams.set("vehicle_type", "motorcycle");
      }
      wazeLink.href = wazeUrl.href;
      wazeLink.setAttribute("aria-label", `Navegar até ${city.name} pelo Waze`);
    }
  }

  function pointIndexFromHash() {
    const slug = new URLSearchParams(window.location.hash.slice(1)).get("ponto");
    const index = cities.findIndex((city) => city.slug === slug);
    return index < 0 ? 0 : index;
  }

  function showCityPhoto(imageId, creditId, city) {
    const image = document.getElementById(imageId);
    const credit = document.getElementById(creditId);
    const photo = city.photo;
    if (!image || !credit) return;

    if (image.getAttribute("src") !== photo.src) {
      image.hidden = true;
      image.onload = () => { image.hidden = false; };
      image.onerror = () => { image.hidden = true; };
      image.alt = photo.alt;
      image.src = photo.src;
    }

    const source = document.createElement("a");
    source.textContent = photo.author;
    source.href = photo.sourceUrl;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.setAttribute("aria-label", `Foto de ${city.name}: ${photo.author}, no Wikimedia Commons`);
    const license = document.createElement("a");
    license.textContent = photo.license === "Public domain" ? "Domínio público" : photo.license;
    license.href = photo.licenseUrl;
    license.target = "_blank";
    license.rel = "noopener noreferrer";
    credit.replaceChildren("Foto: ", source, " · ", license);
    credit.title = "Foto redimensionada e recomprimida; enquadramento ajustado no card.";
  }

  function selectCity(index, pan = false) {
    const nextIndex = Math.max(0, Math.min(cities.length - 1, index));
    if (nextIndex !== activeIndex) {
      document.querySelectorAll(".city-history[open]").forEach((section) => { section.open = false; });
      document.querySelectorAll(".active-card-content, .mobile-sheet-content").forEach((content) => {
        content.scrollTop = 0;
      });
    }
    activeIndex = nextIndex;
    const city = cities[activeIndex];
    showCityPhoto("cityPhoto", "cityPhotoCredit", city);
    showCityPhoto("mobileSheetPhoto", "mobileSheetPhotoCredit", city);
    const verifiedText = city.verifiedPlaque ? "Placa verificada" : "Coordenada municipal";
    const osmHref = `https://www.openstreetmap.org/?mlat=${city.lat}&mlon=${city.lng}#map=16/${city.lat}/${city.lng}`;
    const pointUrl = new URL(window.location.href);
    pointUrl.hash = `ponto=${city.slug}`;
    if (window.location.href !== pointUrl.href) {
      window.history.replaceState(null, "", pointUrl.href);
    }

    [el.cityPermalink, el.mobileSheetPermalink].forEach((link) => {
      if (!link) return;
      link.href = pointUrl.href;
      link.setAttribute("aria-label", `Abrir link direto para ${city.name}`);
    });

    if (el.cityName) el.cityName.textContent = city.name;
    if (el.cityDescription) el.cityDescription.textContent = city.description;
    if (el.cityHistory) el.cityHistory.textContent = city.history;
    if (el.cityVisitStatus) el.cityVisitStatus.textContent = city.visitStatus;
    showSourceLinks(el.cityHistorySources, city.historySources);
    if (el.cityRegion) el.cityRegion.textContent = city.region;
    showSourceLinks(el.cityRegionSources, city.regionSources);
    showHospitality(el.cityStays, hospitality[activeIndex].stays);
    showHospitality(el.cityFood, hospitality[activeIndex].food);
    showPointNavigation(el.cityGoogleLink, el.cityWazeLink, city);
    if (el.coordinates) {
      const elevation = city.elevation !== null ? ` • ${city.elevation} m` : "";
      el.coordinates.textContent = `${city.lat.toFixed(6)}, ${city.lng.toFixed(6)}${elevation}`;
    }
    if (el.osmLink) el.osmLink.href = osmHref;
    if (el.progressText) el.progressText.textContent = `${activeIndex + 1} de ${cities.length}`;

    if (el.mobileActiveCity) el.mobileActiveCity.textContent = city.name;
    if (el.mobileCityName) el.mobileCityName.textContent = city.name;
    if (el.mobileCityStatus) el.mobileCityStatus.textContent = verifiedText;

    if (el.mobileSheetCity) el.mobileSheetCity.textContent = city.name;
    if (el.mobileSheetDescription) el.mobileSheetDescription.textContent = city.description;
    if (el.mobileSheetHistory) el.mobileSheetHistory.textContent = city.history;
    if (el.mobileSheetVisitStatus) el.mobileSheetVisitStatus.textContent = city.visitStatus;
    showSourceLinks(el.mobileSheetHistorySources, city.historySources);
    if (el.mobileSheetRegion) el.mobileSheetRegion.textContent = city.region;
    showSourceLinks(el.mobileSheetRegionSources, city.regionSources);
    showHospitality(el.mobileSheetStays, hospitality[activeIndex].stays);
    showHospitality(el.mobileSheetFood, hospitality[activeIndex].food);
    showPointNavigation(el.mobileSheetGoogleLink, el.mobileSheetWazeLink, city);
    if (el.mobileSheetCoordinates) {
      el.mobileSheetCoordinates.textContent = `${city.lat.toFixed(6)}, ${city.lng.toFixed(6)}`;
    }
    if (el.mobileSheetElevation) {
      el.mobileSheetElevation.textContent =
        city.elevation !== null ? `Elevação: ${city.elevation} m` : "";
    }
    if (el.mobileSheetOsmLink) el.mobileSheetOsmLink.href = osmHref;
    [el.mobilePrevCity, el.cityPrevCity].forEach((button) => {
      if (button) button.disabled = activeIndex === 0;
    });
    [el.mobileNextCity, el.cityNextCity].forEach((button) => {
      if (button) button.disabled = activeIndex === cities.length - 1;
    });

    document.querySelectorAll(".city-button").forEach((button, buttonIndex) => {
      const active = buttonIndex === activeIndex;
      button.classList.toggle("active", active);

      if (active) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });

    markers.forEach((marker, markerIndex) => {
      const markerElement = marker.getElement();
      if (markerElement) {
        markerElement.classList.toggle("active", markerIndex === activeIndex);
      }
    });

    const progressEnd = !playing && activeIndex === cities.length - 1
      ? activeRoutePoints.length
      : activeMilestones[activeIndex] + 1;
    completedRoute.setLatLngs(activeRoutePoints.slice(0, progressEnd));
    if (!playing) vehicle.remove();

    if (pan) {
      const targetZoom = city.verifiedPlaque ? 15 : 12;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      map.flyTo([city.lat, city.lng], targetZoom, {
        duration: reducedMotion ? 0 : 0.65
      });

      markers[activeIndex].openPopup();
    }
  }

  function startPlaying() {
    stopPlaying();

    if (activeIndex >= cities.length - 1) {
      activeIndex = 0;
    }

    playing = true;

    updatePlaybackButtons();

    setMobileMenu(false);
    setMobileSheet(false);
    selectCity(activeIndex, false);
    map.closePopup();
    map.stop();

    const distances = [0];
    for (let index = 1; index < activeRoutePoints.length; index++) {
      distances.push(distances[index - 1] + map.distance(activeRoutePoints[index - 1], activeRoutePoints[index]));
    }

    let segment = activeMilestones[activeIndex];
    let travelled = distances[segment];
    let pauseRemaining = cityPauseMs;
    let previousTime = null;
    vehicle.setLatLng(activeRoutePoints[segment]).addTo(map);
    map.panTo(activeRoutePoints[segment], { animate: false });

    function renderPosition() {
      while (segment < activeRoutePoints.length - 1 && distances[segment + 1] <= travelled) segment++;
      const start = activeRoutePoints[segment];
      const end = activeRoutePoints[segment + 1] || start;
      const length = (distances[segment + 1] || distances[segment]) - distances[segment];
      const fraction = length > 0 ? (travelled - distances[segment]) / length : 0;
      const position = [
        start[0] + (end[0] - start[0]) * fraction,
        start[1] + (end[1] - start[1]) * fraction
      ];
      vehicle.setLatLng(position);
      completedRoute.setLatLngs([...activeRoutePoints.slice(0, segment + 1), position]);
      map.panTo(position, { animate: false });
    }

    function advance(timestamp) {
      playFrame = null;
      if (!playing) return;
      // Não avança o percurso enquanto a aba está em segundo plano.
      let remaining = previousTime === null || document.hidden ? 0 : timestamp - previousTime;
      previousTime = document.hidden ? null : timestamp;

      while (remaining > 0) {
        const paused = Math.min(pauseRemaining, remaining);
        pauseRemaining -= paused;
        remaining -= paused;
        if (remaining <= 0) break;

        const nextCity = activeIndex + 1;
        const target = nextCity < cities.length
          ? distances[activeMilestones[nextCity]]
          : distances[distances.length - 1];
        const duration = Math.max(0, target - travelled) / playbackSpeed * 1000;
        if (remaining < duration) {
          travelled += remaining / 1000 * playbackSpeed;
          remaining = 0;
        } else {
          travelled = target;
          remaining -= duration;
          if (nextCity < cities.length) {
            selectCity(nextCity, false);
            pauseRemaining = cityPauseMs;
          } else {
            renderPosition();
            stopPlaying();
            fitWholeRoute();
            return;
          }
        }
      }
      renderPosition();
      playFrame = window.requestAnimationFrame(advance);
    }

    playFrame = window.requestAnimationFrame(advance);
  }

  cities.forEach((city, index) => {
    const marker = L.marker([city.lat, city.lng], {
      icon: markerIcon(index, city.verifiedPlaque),
      title: city.name
    }).addTo(map);

    let popup = `<strong>${index + 1}. ${city.name}</strong><br>`;
    popup += city.verifiedPlaque
      ? '<span class="popup-status">✓ Placa verificada</span><br>'
      : '<span class="popup-status approx">• Coordenada municipal aproximada</span><br>';

    if (city.elevation !== null) {
      popup += `Elevação: ${city.elevation} m<br>`;
    }

    popup += `${city.lat.toFixed(6)}, ${city.lng.toFixed(6)}<br>`;
    popup += `<small>${city.description}</small>`;

    marker.bindPopup(popup, { maxWidth: 300 });

    marker.on("click", () => {
      stopPlaying();
      selectCity(index, false);

      marker.closePopup();
      setMobileSheet(true);
    });

    markers.push(marker);

    if (el.cityList) {
      const item = document.createElement("li");
      const button = document.createElement("button");

      button.type = "button";
      button.className = "city-button";
      button.dataset.index = String(index);
      button.innerHTML = `
        <span class="city-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="city-title">
          ${city.name}
          <small class="${city.verifiedPlaque ? "verified-label" : "approx-label"}">
            ${city.verifiedPlaque ? "✓ placa verificada" : "coordenada municipal"}
          </small>
        </span>
        <span class="city-arrow">›</span>
      `;

      button.addEventListener("click", () => {
        stopPlaying();
        selectCity(index, true);

        setMobileMenu(false);
        window.setTimeout(() => setMobileSheet(true), 250);
      });

      item.appendChild(button);
      el.cityList.appendChild(item);
    }
  });

  document.querySelectorAll(".route-play").forEach((button) => {
    button.addEventListener("click", () => {
      if (playing) stopPlaying();
      else startPlaying();
    });
  });

  el.fitRoute?.addEventListener("click", () => {
    stopPlaying();
    setMobileSheet(false);
    fitWholeRoute();
  });

  el.mobileFitRoute?.addEventListener("click", () => {
    stopPlaying();
    setMobileSheet(false);
    fitWholeRoute();
  });

  el.mobileMenuToggle?.addEventListener("click", () => {
    setMobileMenu(!document.body.classList.contains("mobile-menu-open"));
  });

  el.mobileMenuClose?.addEventListener("click", () => {
    setMobileMenu(false);
  });

  el.mobileBackdrop?.addEventListener("click", () => {
    setMobileMenu(false);
  });

  el.mobileCityCard?.addEventListener("click", () => {
    setMobileSheet(true);
  });

  el.mobileSheetHandle?.addEventListener("click", () => {
    setMobileSheet(false);
  });

  [el.mobilePrevCity, el.cityPrevCity].forEach((button) => {
    button?.addEventListener("click", () => {
      if (activeIndex <= 0) return;
      stopPlaying();
      selectCity(activeIndex - 1, true);
    });
  });

  [el.mobileNextCity, el.cityNextCity].forEach((button) => {
    button?.addEventListener("click", () => {
      if (activeIndex >= cities.length - 1) return;
      stopPlaying();
      selectCity(activeIndex + 1, true);
    });
  });

  el.routeMode?.addEventListener("change", () => {
    setRouteMode(el.routeMode.value);
  });

  document.addEventListener("keydown", (event) => {
    const openPanel = document.body.classList.contains("mobile-sheet-open")
      ? el.mobileBottomSheet
      : document.body.classList.contains("mobile-menu-open") ? el.routeSidebar : null;

    if (event.key === "Tab" && openPanel) {
      const focusable = Array.from(openPanel.querySelectorAll("button:not([disabled]), a[href], select:not([disabled])"))
        .filter((item) => item.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (first && ((!openPanel.contains(document.activeElement)) ||
          (event.shiftKey && document.activeElement === first) ||
          (!event.shiftKey && document.activeElement === last))) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      }
      return;
    }

    if (event.key !== "Escape") return;

    if (document.body.classList.contains("mobile-sheet-open")) {
      event.preventDefault();
      setMobileSheet(false);
      return;
    }

    if (document.body.classList.contains("mobile-menu-open")) {
      event.preventDefault();
      setMobileMenu(false);
    }
  });

  window.addEventListener("load", () => refreshMapSize(), { once: true });
  window.addEventListener("hashchange", () => {
    stopPlaying();
    selectCity(pointIndexFromHash(), true);
  });
  window.addEventListener("resize", () => refreshMapSize());
  window.addEventListener("orientationchange", () => refreshMapSize());
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshMapSize();
  });

  if ("ResizeObserver" in window) {
    new ResizeObserver(() => refreshMapSize()).observe(map.getContainer());
  }

  const initialIndex = pointIndexFromHash();
  fitWholeRoute();
  selectCity(initialIndex, false);
  if (initialIndex !== 0) {
    window.requestAnimationFrame(() => selectCity(initialIndex, true));
  }

  Object.entries(routeSources).forEach(([mode, source]) => {
    fetch(source.file)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then((xml) => {
        const documentGpx = new DOMParser().parseFromString(xml, "application/xml");
        const trackPoints = documentGpx.getElementsByTagNameNS(
          "http://www.topografix.com/GPX/1/1", "trkpt"
        );
        const points = Array.from(trackPoints, (point) => [
          Number(point.getAttribute("lat")),
          Number(point.getAttribute("lon"))
        ]);
        if (points.length < 2 || points.some(([lat, lng]) => !Number.isFinite(lat) || !Number.isFinite(lng))) {
          throw new Error("Traçado GPX inválido");
        }

        let distance = 0;
        for (let index = 1; index < points.length; index++) {
          distance += map.distance(points[index - 1], points[index]);
        }

        let fromIndex = 0;
        const milestones = cities.map((city) => {
          let nearestIndex = fromIndex;
          let nearestDistance = Infinity;
          for (let index = fromIndex; index < points.length; index++) {
            const currentDistance = map.distance([city.lat, city.lng], points[index]);
            if (currentDistance < nearestDistance) {
              nearestDistance = currentDistance;
              nearestIndex = index;
            }
          }
          fromIndex = nearestIndex;
          return nearestIndex;
        });

        loadedRoutes[mode] = {
          ...source,
          points,
          milestones,
          distanceKm: (distance / 1000).toFixed(1)
        };
        const option = el.routeMode?.querySelector(`option[value="${mode}"]`);
        if (option) {
          option.disabled = false;
          option.textContent = source.label;
        }
      })
      .catch((error) => {
        console.error(`Não foi possível carregar ${source.label}:`, error);
        const option = el.routeMode?.querySelector(`option[value="${mode}"]`);
        if (option) option.textContent = `${source.label} (indisponível)`;
      });
  });
})();
