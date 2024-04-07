---
title: Un ano de Lume
date: 2022-01-05
url: /notas/un-ano-de-lume/
---

# Un ano de 🔥Lume

Durante algo máis dun ano estiven a traballar nun proxecto de código aberto
chamado [Lume](https://lumeland.github.io/), un xerador de páxinas estáticas de
carácter xeral (se che soa Jekyll, Eleventy, Metalsmith ou Middlemand, sabes de
que falo) e creado en [Deno](https://deno.land/) (o prometedor _runtime_ de
Javascript que naceu para competir con Node).

Non é o primeiro proxecto de código aberto que fago (dá unha olladela ao
[meu perfil de Github](https://github.com/oscarotero) e verás unha chea deles),
mais pareceume interesante compartir esta experiencia porque pode resultar útil
para aqueles que estean a pensar en meterse na aventura de crearen e manteren un
proxecto de código aberto.

Podemos categorizar os proxectos de código aberto en dous tipos diferentes:

- Os creados para solucionar un problema específico dalguén, e que despois son
  liberados.
- Os creados inicialmente xa para seren usados por outras persoas. Lume pertence
  a este segundo grupo: non pretende solucionar só un problema meu, senón ser
  unha ferramenta que moita outra xente poida utilizar. Por iso é vital ter en
  conta tanto o proxecto en si como a quen o vai empregar.

## A documentación

A documentación é unha das partes máis importantes do proxecto, mesmo tan
importante como o propio código en si. Sen unha boa documentación o proxecto ten
todas as papeletas para fracasar porque ninguén se vai molestar en probalo e
entender como funciona. Para as primeiras versións, quizais unha explicación
básica no README.md sexa suficiente, porén, unha vez que o proxecto gaña
entidade, é necesario ter unha documentación en condicións.

Por esa razón, unha das primeiras cousas que fixen
[foi crear un sitio web para a documentación](https://lumeland.github.io/), que
no meu caso servía tamén como exemplo dunha web feita con Lume. Dediqueille
bastante tempo: busquei a mellor forma de explicar a información, lin a
documentación doutros xeradores de páxinas estáticas (é dicir, a «competencia»)
e algunhas veces ata «plaxiei» partes que me parecían tan ben explicadas que eu
non podía mellorar. Compara por exemplo
[a explicación de páxinas en Lume](https://lumeland.github.io/creating-pages/page-files/)
coa [mesma sección de Jekyll](https://jekyllrb.com/docs/pages/).

Documentar un proxecto tamén serve para velo desde unha perspectiva máis ampla.
Explicar como funciona unha cousa lévate a pensar se ten sentido que funcione
dese xeito ou se se debería modificar para que sexa máis fácil de usar por
outras persoas.

## Os primeiros usuarios

Se o proxecto ten algo de tracción, comezará a ter algunhas estrelas (o
equivalente ao «gústame» en Github) e é posible que algúns destes _«early
adopters»_ contacte contigo con algunha petición ou suxestión. Poderiamos
dividir estes usuarios en dous tipos:

### Os usuarios prácticos

Son persoas que están a usar Lume para crear unha páxina web real e que
normalmente contactan buscando unha solución a un problema ou caso concreto.
Este tipo de usuarios permiten descubrir novas necesidades non consideradas
inicialmente.

É interesante facerlles caso e tentar dar resposta aos seus problemas.
[O meu primeiro usuario deste tipo foi Peter Robins](https://github.com/lumeland/lume/issues/1),
unha persoa que estaba migrando a súa web de Jekyll a Lume. Como o que pedía
tiña bastante sentido, respondinlle no mesmo día e mesmo lancei unha nova
versión de Lume que incluía a solución para o seu problema. A rapidez nas
respostas dentro dun proxecto de código aberto non é algo moi común, polo que os
usuarios adoitan agradecelo moito.

### Os usuarios curiosos

O segundo tipo de usuarios son outros desenvolvedores que simplemente están
curiosos co proxecto e colaboran de forma desinteresada, ben escribindo código
ou simplemente facendo suxestións, mais que non necesariamente o usan para
proxectos reais ou «serios» senón que o fan para experimentaren.

O primeiro usuario deste tipo foi shadowtime2000, un adolescente que mantén ou
colabora en varios proxectos de código aberto.
[No seu primeiro «issue»](https://github.com/lumeland/lume/issues/12) propoñía
empregar Typescript (algo que acabei facendo 6 meses despois), aínda que quizais
o seu mellor consello
[foi crear un servidor de Discord](https://github.com/lumeland/lume/discussions/24)
(unha aplicación de chat moi semellante a Slack) para poder comunicarme máis
directamente cos usuarios, recoller feedback e axudarlles cos seus problemas.

[A canle de Discord](https://discord.gg/YbTmpACHWB) ten actualmente uns 50
seguidores, persoas que empregan Lume nos seus proxectos e fan suxestións,
preguntas ou simplemente comparten o seu traballo (hai unha canle chamada
_«showcase»_ para iso). Foi unha das mellores cousas que fixen porque me
permitiu unha conversa máis próxima e persoal que a que se pode ter por GitHub.

## Fomenta a colaboración

Sempre me gustou facilitar a colaboración doutra xente nos meus proxectos. Un
proxecto entre varios sempre é moito máis divertido e enriquecedor. Por iso,
sempre que chega alguén cunha proposta ou idea, doulle a posibilidade de que a
implemente el ou ela, en vez de facelo directamente eu. Haberá xente que che
diga que non, que non ten tempo ou coñecementos para facelo. Mais haberá outros
que si se atrevan, e é unha boa maneira de que os usuarios coñezan o proxecto
por dentro, de que se involucren no seu desenvolvemento, e de ti poder aprender
deles e descubrir novas formas de solucionar o mesmo problema. Ás veces a
colaboración externa require máis traballo pola túa parte que se o fixeses
directamente (revisar que todo estea correcto ou facer de guía, se non é así).
Aínda así, recomendo totalmente permitir colaboracións externas sempre que for
posible.

No caso de Lume, [Valtteri Laitinen](https://github.com/valtlai), un finlandés
que pola foto parece bastante novo,
[contactou conmigo porque quería facer un «fork»](https://github.com/lumeland/lumeland.github.io/issues/14)
(unha copia en linguaxe técnica) do proxecto para facer unha versión
personalizada para el. Respondinlle que non había problema, mais que estaba
interesado en saber que mudanzas quería facer, por se se podían implementar
tamén en Lume. Ao final resultou que as súas ideas eran moi boas e o seu código
moi elegante. Despois dun tempo colaborando no proxecto de forma «externa»,
convideino a que entrase dentro da organización, como un membro máis para que
puidese editar directamente o código sen a miña mediación. Estivo
[uns meses bastante activo no proxecto](https://github.com/lumeland/lume/graphs/contributors)
e durante ese tempo fixo contribucións moi interesantes. Despois parou de facer
colaboracións. É algo normal, a maioría dos colaboradores son puntuais e deixan
de colaborar cando cansan do proxecto, deixan de ter tempo ou teñen outro
proxecto entre mans.

## Aprende a estabelecer uns límites

Outro caso que tiven foi o de Shahid Shah, CTO dunha empresa en Washington cunha
web enorme (centos de miles de páxinas)
[que estaba interesado en cambiar o xerador que usaba (Hugo) por Lume](https://github.com/lumeland/lume/discussions/99).
Foi unha sorpresa e unha grande oportunidade para probar se Lume podería
responder a un desafío tan exixente. Unha web de centos de miles de páxinas
precisa dunha solución estable, moi rápida e optimizada. Tiven un Skype con el,
intercambiamos opinións e incluso se ofreceu para botar unha man no
desenvolvemento. Durante un tempo estivemos en contacto, comentando diferentes
melloras e modificacións.

Co tempo decateime de que realmente non quería usar Lume, senón unha versión
propia, adaptada ás súas necesidades. As mudanzas que me suxería ían todas na
liña de facilitar a _customización_ de Lume pola súa parte e cheguei á
conclusión de que esas mudanzas quizais non ían facer o meu proxecto mellor e
decidín recuperar o control do proxecto para levalo onde eu quería. De todos os
modos, moitas das ideas que xurdiron desta relación foron boas e ficaron en
Lume.

É importante non tentar contentar a todo o mundo e ter claro o enfoque que lle
queres dar ao proxecto. Unha vantaxe do código aberto (e a licenza MIT) é que
calquera pode facer un «fork» e facer modificacións ao seu gusto, que supoño que
foi o que finalmente fixo.

## Crea comunidade

A comunidade é a maior satisfacción que se pode obter do desenvolvemento dun
proxecto de código aberto. Crear un lugar onde coñecer xente, compartir
intereses, axudarnos mutuamente e, sobre todo, aprender. Ademais é o que fai que
os proxectos continúen vivos e medren. Fai que outra xente se achegue e colabore
desinteresadamente. No caso de Lume, o xeito de crear comunidade é mediante
Discord, onde podo chatear directamente cos usuarios. Tamén a páxina web, que
ademais de documentar o proxecto,
[inclúe unha lista de sitios webs construídos con Lume](https://lumeland.github.io/getting-started/examples/),
e permite a todo o mundo colaborar directamente no código.

Un xeito de dar a coñecer o proxecto
[é a través de Product Hunt](https://www.producthunt.com/posts/lume-2), unha
plataforma para dar visibilidade a produtos interesantes e pouco coñecidos.
Tamén na web de Jamstack, que ten unha
[sección cunha extensa listaxe de xeradores de páxinas estáticas](https://jamstack.org/generators/).

Unha simple busca en
[Twitter](https://twitter.com/search?q=lume%20deno&src=typed_query&f=live)
permitiume ver opinións de xente que o estaba a usar. Unha delas foi a de
[Manz,](https://manz.dev/) un programador de Tenerife cunha canle de Twitch na
que fixera unha serie de streamings en directo explicando Lume (e que despois
publicou
[na súa canle de Youtube](https://www.youtube.com/watch?v=4YtxRK8oHAU)). O vídeo
permitiume «espiar» como un programador emprega Lume en tempo real, mentres le a
documentación. A partir dese vídeo detectei varias posibles melloras no
proxecto, sobre todo na documentación, e redactei de novo algunhas partes para
que fosen menos confusas e os conceptos ficasen mellor explicados.

Se o fas ben e tes sorte, pode que ata che pasen cousas como que os propios
usuarios
[pidan poder dar soporte económico ao proxecto](https://github.com/lumeland/lume/discussions/154).
Algo que a min nin se me pasara pola cabeza nunca e que me levou a facer
[unha conta en Open Collective](https://opencollective.com/lume), unha
plataforma para poder xestionar recursos económicos por parte de diferentes
tipos de comunidades.

## Conclusións

Como reflexión final, a creación, e posterior mantemento dun proxecto de código
aberto, hai que vela como unha experiencia na que o máis importante é gozar do
proceso, sen pensar noutras metas. Aquí o obxectivo non é gañar cartos e moito
menos poder vivir diso (hai xente que conseguiu vivir, mais é moi difícil chegar
a esa situación).

Polo tanto, antes de comezares un proxecto destas características, ten en conta
algunhas cousas:

- Fai algo que uses ti.
- Tómao coma unha afección. Hai xente que no seu tempo de lecer xoga a
  videoxogos, vai ao cine ou le libros. Un proxecto de código aberto tamén pode
  ser divertido. Se non gozas facéndoo, non o fagas.
- Vas aprender moito e coñecer xente. Sé amable, escoita o que che din e evita a
  toxicidade.
- Pódeche abrir portas a nivel profesional. No meu caso tiven algunha
  oportunidade nese sentido grazas a Lume.
- Dito isto, non creo que os programadores teñan que dedicar o tempo libre a
  proxectos de código libre para conseguir un emprego. Se non tes tempo ou
  ganas, non o fagas.
- Se pensas que estás facendo o parvo, traballando para que outros se aproveiten
  do que fas, déixao.
