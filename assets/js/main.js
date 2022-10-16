import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".serrajr",
  `Trabalho como trainee no setor de engenharia da computação, trabalhando com frontend e backend,
   o trabalho consiste em criar e desenvolver projetos, sites e outros sistemas e programas.`,
  "Trainee em Engenharia da Computação",
  "Serra Jr. Engenharia",
  "Set 2022 - Hoje"
);

hoverChangeExperience(
  ".bajasae",
  `Dimensionamento e manutenção do sistema de telemetria e
  elétrica de um veículo mini-baja SAE. Aquisição de conhecimento 
  nas normas técnicas e de segurança e no manuseio de ferramentas 
  de corte e solda. Participação da 8ª Edição do BAJA - RIO junto à equipe`,
  "Membro do Setor de Telemetria",
  "Caledonia Racing Baja SAE",
  "Jul 2022 - Hoje"
);

hoverChangeExperience(
  ".uerj",
  `Desenvolvimento de protótipos de Sistemas de Automação
  para o auxílio do ensino nos cursos de graduação. Na etapa
  atual atuo na prototipagem de projetos relacionados à Arduino
  e projetos envolvendo impressões 3D.`,
  "Estágio Interno Complementar",
  "Universidade do Estado do Rio de Janeiro",
  "Jun 2022 - Hoje"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".sass",
  "Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass."
);
hoverChangeDescription(
  ".react",
  "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe."
);
