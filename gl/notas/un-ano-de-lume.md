---
title: Un ano de Lume
date: 2022-01-05
url: /notas/un-ano-de-lume/
---

# Un ano de 馃敟Lume

Durante algo m谩is dun ano estiven a traballar nun proxecto de c贸digo aberto
chamado [Lume](https://lumeland.github.io/), un xerador de p谩xinas est谩ticas de
car谩cter xeral (se che soa Jekyll, Eleventy, Metalsmith ou Middlemand, sabes de
que falo) e creado en [Deno](https://deno.land/) (o prometedor _runtime_ de
Javascript que naceu para competir con Node).

Non 茅 o primeiro proxecto de c贸digo aberto que fago (d谩 unha olladela ao
[meu perfil de Github](https://github.com/oscarotero) e ver谩s unha chea deles),
mais pareceume interesante compartir esta experiencia porque pode resultar 煤til
para aqueles que estean a pensar en meterse na aventura de crearen e manteren un
proxecto de c贸digo aberto.

Podemos categorizar os proxectos de c贸digo aberto en dous tipos diferentes:

- Os creados para solucionar un problema espec铆fico dalgu茅n, e que despois son
  liberados.
- Os creados inicialmente xa para seren usados por outras persoas. Lume pertence
  a este segundo grupo: non pretende solucionar s贸 un problema meu, sen贸n ser
  unha ferramenta que moita outra xente poida utilizar. Por iso 茅 vital ter en
  conta tanto o proxecto en si como a quen o vai empregar.

## A documentaci贸n

A documentaci贸n 茅 unha das partes m谩is importantes do proxecto, mesmo tan
importante como o propio c贸digo en si. Sen unha boa documentaci贸n o proxecto ten
todas as papeletas para fracasar porque ningu茅n se vai molestar en probalo e
entender como funciona. Para as primeiras versi贸ns, quizais unha explicaci贸n
b谩sica no README.md sexa suficiente, por茅n, unha vez que o proxecto ga帽a
entidade, 茅 necesario ter unha documentaci贸n en condici贸ns.

Por esa raz贸n, unha das primeiras cousas que fixen
[foi crear un sitio web para a documentaci贸n](https://lumeland.github.io/), que
no meu caso serv铆a tam茅n como exemplo dunha web feita con Lume. Dediqueille
bastante tempo: busquei a mellor forma de explicar a informaci贸n, lin a
documentaci贸n doutros xeradores de p谩xinas est谩ticas (茅 dicir, a 芦competencia禄)
e algunhas veces ata 芦plaxiei禄 partes que me parec铆an tan ben explicadas que eu
non pod铆a mellorar. Compara por exemplo
[a explicaci贸n de p谩xinas en Lume](https://lumeland.github.io/creating-pages/page-files/)
coa [mesma secci贸n de Jekyll](https://jekyllrb.com/docs/pages/).

Documentar un proxecto tam茅n serve para velo desde unha perspectiva m谩is ampla.
Explicar como funciona unha cousa l茅vate a pensar se ten sentido que funcione
dese xeito ou se se deber铆a modificar para que sexa m谩is f谩cil de usar por
outras persoas.

## Os primeiros usuarios

Se o proxecto ten algo de tracci贸n, comezar谩 a ter algunhas estrelas (o
equivalente ao 芦g煤stame禄 en Github) e 茅 posible que alg煤ns destes _芦early
adopters禄_ contacte contigo con algunha petici贸n ou suxesti贸n. Poderiamos
dividir estes usuarios en dous tipos:

### Os usuarios pr谩cticos

Son persoas que est谩n a usar Lume para crear unha p谩xina web real e que
normalmente contactan buscando unha soluci贸n a un problema ou caso concreto.
Este tipo de usuarios permiten descubrir novas necesidades non consideradas
inicialmente.

脡 interesante facerlles caso e tentar dar resposta aos seus problemas.
[O meu primeiro usuario deste tipo foi Peter Robins](https://github.com/lumeland/lume/issues/1),
unha persoa que estaba migrando a s煤a web de Jekyll a Lume. Como o que ped铆a
ti帽a bastante sentido, respondinlle no mesmo d铆a e mesmo lancei unha nova
versi贸n de Lume que inclu铆a a soluci贸n para o seu problema. A rapidez nas
respostas dentro dun proxecto de c贸digo aberto non 茅 algo moi com煤n, polo que os
usuarios adoitan agradecelo moito.

### Os usuarios curiosos

O segundo tipo de usuarios son outros desenvolvedores que simplemente est谩n
curiosos co proxecto e colaboran de forma desinteresada, ben escribindo c贸digo
ou simplemente facendo suxesti贸ns, mais que non necesariamente o usan para
proxectos reais ou 芦serios禄 sen贸n que o fan para experimentaren.

O primeiro usuario deste tipo foi shadowtime2000, un adolescente que mant茅n ou
colabora en varios proxectos de c贸digo aberto.
[No seu primeiro 芦issue禄](https://github.com/lumeland/lume/issues/12) propo帽铆a
empregar Typescript (algo que acabei facendo 6 meses despois), a铆nda que quizais
o seu mellor consello
[foi crear un servidor de Discord](https://github.com/lumeland/lume/discussions/24)
(unha aplicaci贸n de chat moi semellante a Slack) para poder comunicarme m谩is
directamente cos usuarios, recoller feedback e axudarlles cos seus problemas.

[A canle de Discord](https://discord.gg/YbTmpACHWB) ten actualmente uns 50
seguidores, persoas que empregan Lume nos seus proxectos e fan suxesti贸ns,
preguntas ou simplemente comparten o seu traballo (hai unha canle chamada
_芦showcase禄_ para iso). Foi unha das mellores cousas que fixen porque me
permitiu unha conversa m谩is pr贸xima e persoal que a que se pode ter por GitHub.

## Fomenta a colaboraci贸n

Sempre me gustou facilitar a colaboraci贸n doutra xente nos meus proxectos. Un
proxecto entre varios sempre 茅 moito m谩is divertido e enriquecedor. Por iso,
sempre que chega algu茅n cunha proposta ou idea, doulle a posibilidade de que a
implemente el ou ela, en vez de facelo directamente eu. Haber谩 xente que che
diga que non, que non ten tempo ou co帽ecementos para facelo. Mais haber谩 outros
que si se atrevan, e 茅 unha boa maneira de que os usuarios co帽ezan o proxecto
por dentro, de que se involucren no seu desenvolvemento, e de ti poder aprender
deles e descubrir novas formas de solucionar o mesmo problema. 脕s veces a
colaboraci贸n externa require m谩is traballo pola t煤a parte que se o fixeses
directamente (revisar que todo estea correcto ou facer de gu铆a, se non 茅 as铆).
A铆nda as铆, recomendo totalmente permitir colaboraci贸ns externas sempre que for
posible.

No caso de Lume, [Valtteri Laitinen](https://github.com/valtlai), un finland茅s
que pola foto parece bastante novo,
[contactou conmigo porque quer铆a facer un 芦fork禄](https://github.com/lumeland/lumeland.github.io/issues/14)
(unha copia en linguaxe t茅cnica) do proxecto para facer unha versi贸n
personalizada para el. Respondinlle que non hab铆a problema, mais que estaba
interesado en saber que mudanzas quer铆a facer, por se se pod铆an implementar
tam茅n en Lume. Ao final resultou que as s煤as ideas eran moi boas e o seu c贸digo
moi elegante. Despois dun tempo colaborando no proxecto de forma 芦externa禄,
convideino a que entrase dentro da organizaci贸n, como un membro m谩is para que
puidese editar directamente o c贸digo sen a mi帽a mediaci贸n. Estivo
[uns meses bastante activo no proxecto](https://github.com/lumeland/lume/graphs/contributors)
e durante ese tempo fixo contribuci贸ns moi interesantes. Despois parou de facer
colaboraci贸ns. 脡 algo normal, a maior铆a dos colaboradores son puntuais e deixan
de colaborar cando cansan do proxecto, deixan de ter tempo ou te帽en outro
proxecto entre mans.

## Aprende a estabelecer uns l铆mites

Outro caso que tiven foi o de Shahid Shah, CTO dunha empresa en Washington cunha
web enorme (centos de miles de p谩xinas)
[que estaba interesado en cambiar o xerador que usaba (Hugo) por Lume](https://github.com/lumeland/lume/discussions/99).
Foi unha sorpresa e unha grande oportunidade para probar se Lume poder铆a
responder a un desaf铆o tan exixente. Unha web de centos de miles de p谩xinas
precisa dunha soluci贸n estable, moi r谩pida e optimizada. Tiven un Skype con el,
intercambiamos opini贸ns e incluso se ofreceu para botar unha man no
desenvolvemento. Durante un tempo estivemos en contacto, comentando diferentes
melloras e modificaci贸ns.

Co tempo decateime de que realmente non quer铆a usar Lume, sen贸n unha versi贸n
propia, adaptada 谩s s煤as necesidades. As mudanzas que me suxer铆a 铆an todas na
li帽a de facilitar a _customizaci贸n_ de Lume pola s煤a parte e cheguei 谩
conclusi贸n de que esas mudanzas quizais non 铆an facer o meu proxecto mellor e
decid铆n recuperar o control do proxecto para levalo onde eu quer铆a. De todos os
modos, moitas das ideas que xurdiron desta relaci贸n foron boas e ficaron en
Lume.

脡 importante non tentar contentar a todo o mundo e ter claro o enfoque que lle
queres dar ao proxecto. Unha vantaxe do c贸digo aberto (e a licenza MIT) 茅 que
calquera pode facer un 芦fork禄 e facer modificaci贸ns ao seu gusto, que supo帽o que
foi o que finalmente fixo.

## Crea comunidade

A comunidade 茅 a maior satisfacci贸n que se pode obter do desenvolvemento dun
proxecto de c贸digo aberto. Crear un lugar onde co帽ecer xente, compartir
intereses, axudarnos mutuamente e, sobre todo, aprender. Ademais 茅 o que fai que
os proxectos contin煤en vivos e medren. Fai que outra xente se achegue e colabore
desinteresadamente. No caso de Lume, o xeito de crear comunidade 茅 mediante
Discord, onde podo chatear directamente cos usuarios. Tam茅n a p谩xina web, que
ademais de documentar o proxecto,
[incl煤e unha lista de sitios webs constru铆dos con Lume](https://lumeland.github.io/getting-started/examples/),
e permite a todo o mundo colaborar directamente no c贸digo.

Un xeito de dar a co帽ecer o proxecto
[茅 a trav茅s de Product Hunt](https://www.producthunt.com/posts/lume-2), unha
plataforma para dar visibilidade a produtos interesantes e pouco co帽ecidos.
Tam茅n na web de Jamstack, que ten unha
[secci贸n cunha extensa listaxe de xeradores de p谩xinas est谩ticas](https://jamstack.org/generators/).

Unha simple busca en
[Twitter](https://twitter.com/search?q=lume%20deno&src=typed_query&f=live)
permitiume ver opini贸ns de xente que o estaba a usar. Unha delas foi a de
[Manz,](https://manz.dev/) un programador de Tenerife cunha canle de Twitch na
que fixera unha serie de streamings en directo explicando Lume (e que despois
publicou
[na s煤a canle de Youtube](https://www.youtube.com/watch?v=4YtxRK8oHAU)). O v铆deo
permitiume 芦espiar禄 como un programador emprega Lume en tempo real, mentres le a
documentaci贸n. A partir dese v铆deo detectei varias posibles melloras no
proxecto, sobre todo na documentaci贸n, e redactei de novo algunhas partes para
que fosen menos confusas e os conceptos ficasen mellor explicados.

Se o fas ben e tes sorte, pode que ata che pasen cousas como que os propios
usuarios
[pidan poder dar soporte econ贸mico ao proxecto](https://github.com/lumeland/lume/discussions/154).
Algo que a min nin se me pasara pola cabeza nunca e que me levou a facer
[unha conta en Open Collective](https://opencollective.com/lume), unha
plataforma para poder xestionar recursos econ贸micos por parte de diferentes
tipos de comunidades.

## Conclusi贸ns

Como reflexi贸n final, a creaci贸n, e posterior mantemento dun proxecto de c贸digo
aberto, hai que vela como unha experiencia na que o m谩is importante 茅 gozar do
proceso, sen pensar noutras metas. Aqu铆 o obxectivo non 茅 ga帽ar cartos e moito
menos poder vivir diso (hai xente que conseguiu vivir, mais 茅 moi dif铆cil chegar
a esa situaci贸n).

Polo tanto, antes de comezares un proxecto destas caracter铆sticas, ten en conta
algunhas cousas:

- Fai algo que uses ti.
- T贸mao coma unha afecci贸n. Hai xente que no seu tempo de lecer xoga a
  videoxogos, vai ao cine ou le libros. Un proxecto de c贸digo aberto tam茅n pode
  ser divertido. Se non gozas fac茅ndoo, non o fagas.
- Vas aprender moito e co帽ecer xente. S茅 amable, escoita o que che din e evita a
  toxicidade.
- P贸deche abrir portas a nivel profesional. No meu caso tiven algunha
  oportunidade nese sentido grazas a Lume.
- Dito isto, non creo que os programadores te帽an que dedicar o tempo libre a
  proxectos de c贸digo libre para conseguir un emprego. Se non tes tempo ou
  ganas, non o fagas.
- Se pensas que est谩s facendo o parvo, traballando para que outros se aproveiten
  do que fas, d茅ixao.
