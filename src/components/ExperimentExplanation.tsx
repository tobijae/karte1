'use client';

import { FaRedo } from 'react-icons/fa';

interface ExperimentExplanationProps {
  isVisible: boolean;
  onReset: () => void;
}

export default function ExperimentExplanation({ isVisible, onReset }: ExperimentExplanationProps) {
  return (
    <div className={`${isVisible ? 'fade-in' : 'hidden'} mt-12 mb-16`}>
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Razlaga eksperimenta</h2>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Namen eksperimenta</h3>
            <p className="text-gray-300">
            Glavni namen tega eksperimenta je raziskati moč zunanjih dejavnikov na odločanje posameznika, ko je slednji negotov. 
Ko se ljudje znajdejo pred izbiro in jasne poti naprej, pogosto začnemo iskati navodila ali namige iz svoje okolice. 
Ta eksperiment uporabi preprosto igro s kartami kot demonstracijo, kako močno lahko zunanji vplivi oblikujejo naše odločitve.

Z razdelitvijo udeležencev v tri skupine – nevtralno skupino brez našega vpliva in dve drugi skupini z nasprotnimi nasprotnimi navodili – smo lahko natančno opazovali učinek preprostih verbalnih napotkov na izbire posameznikov. 
Rezultati, kjer je nevtralna skupina pokazala popolnoma uravnoteženo razdelitev (50/50), medtem ko sta skupini z navodili pokazali močan nagib v smeri predlagane izbire, jasno dokazujejo, kako zunanjost lahko vpliva na nas.
Širši cilj tega eksperimenta presega zgolj razumevanje vedenja pri igri s kartami – ponuja vpogled v vsakodnevno odločanje, od potrošniških navad do pomembnih življenjskih odločitev. 
Z razumevanjem, kako skoraj lahko zunanjost &apos;podzavestno&apos; oblikujejo naše odločitve, lahko postanemo bolj ozaveščeni o vplivih, ki usmerjajo naše izbire.
Ta poiskus služi tudi kot učno orodje, ki na preprost in interaktiven način prikaže moč psiholoških vplivov in nas spodbuja k razmišljanju o lastnem procesu odločanja.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Način dela</h3>
            <p className="text-gray-300">
              Udeleženci so bili razdeljeni v tri skupine. Vsaka skupina je dobila enako nalogo - 
              izbrati eno od treh kart. Po izbiri prve karte, so dobili izbiro da ostanejo pri 
              svoji karti ali pa jo zamenjajo. Razlika med skupinami je bila v navodilih:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
              <li><span className="font-medium text-blue-400">Skupina / (nevtralna)</span>: Nevtralna navodila brez dodatnih dejstev.</li>
              <li><span className="font-medium text-green-400">Skupina - (ostani)</span>: Navodila s priporočilom, da ostanejo pri prvotni izbiri.</li>
              <li><span className="font-medium text-orange-400">Skupina + (zamenjaj)</span>: Navodila s priporočilom, da zamenjajo prvotno izbiro.</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Rezultati</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="border border-blue-500 rounded-lg p-4 text-center bg-gray-700">
                <h4 className="font-semibold text-blue-400">Skupina / (nevtralna)</h4>
                <p className="text-2xl font-bold mt-2">50% zamenjalo</p>
                <p className="text-2xl font-bold">50% ostalo</p>
              </div>
              <div className="border border-green-500 rounded-lg p-4 text-center bg-gray-700">
                <h4 className="font-semibold text-green-400">Skupina - (ostani)</h4>
                <p className="text-2xl font-bold mt-2">22% zamenjalo</p>
                <p className="text-2xl font-bold">78% ostalo</p>
              </div>
              <div className="border border-orange-500 rounded-lg p-4 text-center bg-gray-700">
                <h4 className="font-semibold text-orange-400">Skupina + (zamenjaj)</h4>
                <p className="text-2xl font-bold mt-2">70% zamenjalo</p>
                <p className="text-2xl font-bold">30% ostalo</p>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Podobni poskusi</h3>
            <p className="text-gray-300 mb-4">
              Rezultati jasno kažejo, da zunanji vpliv pomembno vpliva na naše odločitve. 
              Brez navodil so udeleženci izbrali enakomerno (50/50), medtem ko je ob prisotnih navodilih
              večina sledila predlaganemu dejanju.
            </p>
            
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-400">Monty Hall problem</h4>
                <p className="text-gray-300 mt-1">
                  Eden najbolj znanih eksperimentov, ki demonstrira vpliv dejavnikov na odločanje v situacijah negotovosti, je &quot;Monty Hall problem&quot;. Ta problem temelji na ameriškem televizijskem šovu &quot;Let&apos;s Make a Deal&quot;, kjer tekmovalec izbira med tremi vrati. Za enimi je nagrada (avtomobil), za drugimi dvemi pa ni nagrade (koza). Po izbiri tekmovalca voditelj, ki ve, kje je nagrada, odpre ena od preostalih vrat, za katerimi ni nagrade. Tekmovalec se mora nato odločiti, ali bo ostal pri prvotni izbiri ali zamenjal vrata.
                </p>
                <p className="text-gray-300 mt-2">
                  Matematično je dokazano, da je verjetnost zmage večja, če tekmovalec zamenja vrata (2/3 namesto 1/3), vendar večina ljudi intuitivno misli, da je verjetnost enaka ne glede na to, ali zamenjajo ali ne. V eksperimentih, ki jih je izvedla psihologinja Marilyn vos Savant leta 1990, je pokazala, da lahko z ustrezno sugestijo bistveno vplivamo na to, ali se bodo ljudje odločili za zamenjavo ali ne – podobno kot v našem eksperimentu s kartami.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400">Aschov eksperiment konformnosti (1951)</h4>
                <p className="text-gray-300 mt-1">
                  Solomon Asch je izvedel serijo eksperimentov, ki so pokazali moč socialnega vpliva. Udeleženec je bil postavljen v skupino &quot;sodelavcev&quot; (v resnici igralcev), ki so namenoma podajali očitno napačne odgovore pri preprosti nalogi primerjave dolžine črt. Rezultati so pokazali, da je približno 75% udeležencev vsaj enkrat podalo napačen odgovor, da bi se prilagodili skupini, čeprav je bila pravilna rešitev očitna.
                </p>
                <p className="text-gray-300 mt-2">
                  To je pomembna vzporednica z našim eksperimentom, saj kaže, kako močno lahko ostali ljudje vplivajo na naše odločitve, tudi ko imamo jasne informacije o pravilni izbiri.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400">Milgramov eksperiment o poslušnosti avtoriteti (1961)</h4>
                <p className="text-gray-300 mt-1">
                  Stanley Milgram je raziskoval, kako moč, ki je dodeljena posamezniku vpliva na vedenje posameznikov. Udeleženci so domnevno sodelovali v eksperimentu o učenju, kjer so morali drugemu &quot;udeležencu&quot; (v resnici igralcu) dajati električne šoke za napačne odgovore. Kljub navidezni bolečini &quot;učenca&quot; je 65% udeležencev, zgolj na podlagi verbalnih sugestij raziskovalca v beli halji, dalo celo najhujše, potencialno smrtonosne šoke.
                </p>
                <p className="text-gray-300 mt-2">
                  Ta eksperiment kaže, kako lahko moč dramatično vpliva na vedenje ljudi, podobno kot so v našem eksperimentu enostavna navodila bistveno spremenila odločitve udeležencev.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400">Langer, Blank in Chanowitz: &quot;Prazne besede&quot; eksperiment (1978)</h4>
                <p className="text-gray-300 mt-1">
                  Ellen Langer in sodelavci so proučevali vpliv utemeljitve na pripravljenost ljudi, da ustrežejo zahtevi. Raziskovalci so poskušali preskočiti vrsto za fotokopiranje z različnimi prošnjami. Ko so uporabili prošnjo brez utemeljitve (&quot;Oprostite, imam 5 strani. Lahko uporabim kopirni stroj?&quot;), je 60% ljudi ugodilo. Ko so dodali pravo utemeljitev (&quot;...ker zamujam&quot;), je ugodilo 94% ljudi. Najpomembneje pa je, da je prošnja s prazno utemeljitvijo (&quot;...ker moram narediti nekaj kopij&quot;) dosegla skoraj enak učinek (93%).
                </p>
                <p className="text-gray-300 mt-2">
                  Ta eksperiment demonstrira, kako že sama oblika besed, ne glede na njeno vsebinsko vrednost, lahko močno vpliva na odločitve – podobno kot je v našem eksperimentu zgolj preprost predlog bistveno spremenil vzorce odločanja.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Zaključek in Aktualizacija</h3>
            <p className="text-gray-300">
              Rezultati našega eksperimenta nedvoumno potrjujejo moč zunanjosti pri oblikovanju odločitev. Rezultati so posebej zgovorni – v skupini s priporočilom za zamenjavo je 70% udeležencev to tudi storilo, medtem ko je v skupini s priporočilom za ohranitev prvotne izbire 78% udeležencev sledilo temu nasvetu. Ta doslednost potrjuje, da tudi preprosta verbalna intervencija lahko bistveno spremeni vzorce odločanja.
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Širše implikacije v sodobni družbi</h4>
            
            <div className="space-y-4 mt-3">
              <div>
                <h5 className="font-medium text-blue-400">Medijska manipulacija in informacijski prostor</h5>
                <p className="text-gray-300 mt-1">
                  V dobi digitalnih medijev smo stalno izpostavljeni poskusom usmerjanja naših odločitev. Od naslovov novic, oblikovanih za spodbujanje čustvenih odzivov (&quot;clickbaitov&quot;), do algoritmov družbenih omrežij, ki selektivno prikazujejo vsebine, je medijski prostor poln mehanizmov, ki izkoriščajo dovzetnost ljudi in potencialno prodajanje njihovih podatkov. Razumevanje teh mehanizmov nam lahko pomaga kritično presojati medijske vsebine. 
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-blue-400">Politično odločanje in volitve</h5>
                <p className="text-gray-300 mt-1">
                  Volilne kampanje in politična sporočila pogosto temeljijo na skrbno oblikovanih mnenjih in oglasih, ki volivce usmerjajo k določenim stališčem. Način uokvirjanja političnih vprašanj, izbira besed in čustveni podtoni lahko pomembno vplivajo na politične preference. Zavedanje o tovrstnih vplivih krepi demokratično kulturo in spodbuja informirane volilne odločitve.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-blue-400">Potrošniško vedenje in ekonomija</h5>
                <p className="text-gray-300 mt-1">
                  Oglaševalska industrija že desetletja izkorišča psihologijo. Od strateškega postavljanja izdelkov v trgovinah do personaliziranih spletnih oglasov – potrošniške odločitve so stalna tarča. Poznavanje teh tehnik nam omogoča, da postanemo bolj ozaveščeni potrošniki in sprejemamo odločitve, ki resnično odražajo naše potrebe in ne potrebe nekoga drugega.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-blue-400">Zdravje in medicina</h5>
                <p className="text-gray-300 mt-1">
                  V zdravstvenem kontekstu način predstavitve informacij (npr. o tveganjih in koristih zdravljenja) bistveno vpliva na odločitve pacientov. Fenomen &quot;placebo učinka&quot; prav tako dokazuje, kako močno lahko sugestija vpliva na fizične izide zdravljenja.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-blue-400">Medosebni odnosi in komunikacija</h5>
                <p className="text-gray-300 mt-1">
                  Reševanje konfliktov do vsakdanjih pogovorov – način uokvirjanja sporočil vpliva na odzive sogovornikov. Razumevanje teh mehanizmov lahko izboljša medsebojno razumevanje in spodbuja boljšo komunikacijo.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-blue-400">Digitalne tehnologije in spletne platforme</h5>
                <p className="text-gray-300 mt-1">
                  Digitalni oblikovalci vse bolj uporabljajo tehnike &quot;nudge&quot; – subtilnih spodbud za določeno vedenje – pri oblikovanju uporabniških vmesnikov. Te tehnike lahko spodbujajo tako pozitivna vedenja (npr. varovanje zasebnosti) kot tudi problematična (npr. prekomerna uporaba aplikacij). 
                </p>
              </div>
              
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-2">Strategije za avtonomno odločanje</h4>
            <p className="text-gray-300 mb-2">Za sprejemanje bolj avtonomnih odločitev lahko uporabimo več strategij:</p>
            
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Aktivno zavedanje o potencialnih zunanjih vplivih pri sprejemanju odločitev</li>
              <li>Namerno upočasnjevanje procesa odločanja, da omogočimo kritični razmislek</li>
              <li>Iskanje raznolikih virov informacij pred sprejemanjem pomembnih odločitev</li>
              <li>Prepoznavanje čustvenih odzivov, ki jih sprožajo zunanji dejavniki</li>
              <li>Redna refleksija o lastnih odločitvah in dejavnikih, ki so nanje vplivali</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-6 mb-2">Zaključna misel</h4>
            <p className="text-gray-300">
              Ta navidezno preprost eksperiment s kartami razkriva temeljno lastnost človeškega odločanja – kako zlahka se nas da zmanipulirati. V svetu, kjer se tehnike vplivanja nenehno izpopolnjujejo in postajajo vse bolj prefinjene, je razumevanje teh mehanizmov ključno za ohranjanje osebnega &apos;prostora&apos; in spodbujanje zdrave družbene dinamike. 
            </p>
          </section>
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={onReset}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <FaRedo />
            <span>Ponovi eksperiment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
