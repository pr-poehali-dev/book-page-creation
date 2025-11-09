import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedChapter, setSelectedChapter] = useState(0);

  const chapters = [
    {
      number: 1,
      title: "Тайна старого особняка",
      preview: "Осенний вечер окутал город серой дымкой. Дождь стучал по крышам, а ветер свистел в узких переулках. Именно в такую погоду профессор Александр Воронцов получил странное письмо...",
      fullText: `Осенний вечер окутал город серой дымкой. Дождь стучал по крышам, а ветер свистел в узких переулках. Именно в такую погоду профессор Александр Воронцов получил странное письмо.

Конверт был запечатан красным сургучом с необычной печатью - изображением ворона, держащего в клюве ключ. Внутри лежало послание, написанное старинным почерком:

"Многоуважаемый профессор! Осмеливаюсь обратиться к Вам с просьбой о помощи в деле чрезвычайной важности. Прошу пожаловать в особняк на Тверской улице, дом 47, завтра ровно в полночь. Приходите один. Ваша репутация исследователя древностей внушает надежду на разрешение загадки, хранимой нашей семьей уже два столетия."

Подпись была неразборчива, но профессор узнал адрес - это был знаменитый дом Волконских, давно заброшенный и окутанный мрачными легендами...`
    },
    {
      number: 2,
      title: "Полночный визит",
      preview: "Часы пробили двенадцать раз, когда профессор подошёл к массивным воротам особняка. Луна выглянула из-за туч, осветив величественный фасад здания...",
      fullText: `Часы пробили двенадцать раз, когда профессор подошёл к массивным воротам особняка. Луна выглянула из-за туч, осветив величественный фасад здания. Дом Волконских был построен в XVIII веке и сохранил черты барокко - изящные колонны, лепнину на фронтонах, высокие окна с витражами.

Ворота неожиданно распахнулись, словно кто-то наблюдал за его приближением. Профессор шагнул во двор, заросший диким плющом. Его шаги гулко отдавались эхом на каменных плитах дорожки.

Дверь особняка отворилась, открывая тускло освещённый холл. На пороге стояла пожилая женщина в чёрном платье старинного покроя.

"Проходите, профессор. Я графиня Елизавета Волконская, последняя из нашего рода. То, что я хочу вам показать, хранилось в тайне с 1812 года..."

Она повела его по мраморной лестнице в библиотеку, где на столе лежала раскрытая книга в кожаном переплёте...`
    },
    {
      number: 3,
      title: "Секрет библиотеки",
      preview: "Книга была необычной. Её страницы источали запах времени, а текст был написан на странном языке, похожем на латынь, но с добавлением непонятных символов...",
      fullText: `Книга была необычной. Её страницы источали запах времени, а текст был написан на странном языке, похожем на латынь, но с добавлением непонятных символов.

"Это манускрипт моего предка, графа Николая Волконского," - начала рассказ графиня. - "Он служил при дворе Екатерины Великой и был членом тайного общества учёных. Незадолго до смерти он оставил это послание своим потомкам."

Профессор склонился над книгой, рассматривая иллюстрации. На одной из страниц был изображён план особняка с отметкой в подвале.

"Вы думаете, речь идёт о тайнике?" - спросил он.

"Не просто о тайнике, профессор. О входе в подземные ходы, которые, по легенде, связывают все старые дома нашего квартала. Говорят, там спрятаны артефакты, привезённые из экспедиций в далёкие земли."

Луна скрылась за тучами, и в библиотеке стало совсем темно. Где-то внизу раздался странный скрежет...`
    }
  ];

  const reviews = [
    { author: "Анна Петрова", role: "Литературный критик", text: "Захватывающий сюжет, который держит в напряжении до последней страницы. Автор мастерски создаёт атмосферу таинственности.", rating: 5 },
    { author: "Дмитрий Соколов", role: "Книжный блогер", text: "Редкое сочетание исторической достоверности и увлекательного повествования. Рекомендую всем любителям мистики!", rating: 5 },
    { author: "Елена Морозова", role: "Читательница", text: "Не могла оторваться! Читала всю ночь. Персонажи живые, описания яркие, загадки интригующие.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#FEF7E8] text-[#2C1810]">
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative">
        <section className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 border-2 border-[#C9A961] text-[#C9A961] text-sm tracking-widest">
                  НОВИНКА СЕЗОНА
                </div>
                <h1 className="text-7xl font-serif leading-tight">
                  Тайна<br/>
                  <span className="text-[#C9A961]">Старого</span><br/>
                  Особняка
                </h1>
                <p className="text-xl text-[#2C1810]/70 italic">
                  Мистический детектив о древних секретах и забытых артефактах
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#2C1810] hover:bg-[#2C1810]/90 text-[#FEF7E8] px-8 py-6 text-lg"
                  onClick={() => document.getElementById('read')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="BookOpen" className="mr-2" />
                  Читать первые главы
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#FEF7E8] px-8 py-6 text-lg"
                  onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить книгу
                </Button>
              </div>

              <div className="flex gap-8 pt-4 border-t border-[#C9A961]/30">
                <div>
                  <div className="text-3xl font-bold text-[#C9A961]">342</div>
                  <div className="text-sm text-[#2C1810]/60">страницы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C9A961]">2024</div>
                  <div className="text-sm text-[#2C1810]/60">год издания</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C9A961]">5.0</div>
                  <div className="text-sm text-[#2C1810]/60">рейтинг</div>
                </div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A961]/20 to-[#2C1810]/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <Card className="relative bg-[#F4E8D0] border-[#C9A961]/30 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#2C1810] to-[#4A3428] p-12 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-16 h-16 border-2 border-[#C9A961] flex items-center justify-center">
                      <Icon name="Key" size={32} className="text-[#C9A961]" />
                    </div>
                    <div>
                      <div className="text-[#C9A961] text-sm tracking-widest mb-2">АЛЕКСАНДР ВОРОНЦОВ</div>
                      <h2 className="text-5xl font-serif text-[#FEF7E8] leading-tight">
                        Тайна<br/>Старого<br/>Особняка
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-2 text-[#FEF7E8]/70 text-sm">
                    <div>Мистический детектив</div>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" size={16} className="fill-[#C9A961] text-[#C9A961]" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="contents" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-20 bg-[#C9A961]" />
              <Icon name="BookMarked" size={32} className="text-[#C9A961]" />
              <div className="h-px w-20 bg-[#C9A961]" />
            </div>
            <h2 className="text-5xl font-serif">Содержание</h2>
            <p className="text-[#2C1810]/70 text-lg max-w-2xl mx-auto">
              Путешествие в мир тайн и загадок
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {chapters.map((chapter, index) => (
              <Card 
                key={index}
                className="bg-white/50 border-[#C9A961]/20 hover:border-[#C9A961] transition-all cursor-pointer hover:shadow-lg group"
                onClick={() => {
                  setSelectedChapter(index);
                  document.getElementById('read')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 flex-shrink-0 border-2 border-[#C9A961] flex items-center justify-center text-2xl font-serif text-[#C9A961] group-hover:bg-[#C9A961] group-hover:text-[#FEF7E8] transition-colors">
                      {chapter.number}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-serif group-hover:text-[#C9A961] transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-[#2C1810]/70 leading-relaxed">
                        {chapter.preview}
                      </p>
                    </div>
                    <Icon name="ChevronRight" className="text-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="read" className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-[#F4E8D0]/30">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-20 bg-[#C9A961]" />
              <Icon name="BookOpen" size={32} className="text-[#C9A961]" />
              <div className="h-px w-20 bg-[#C9A961]" />
            </div>
            <h2 className="text-5xl font-serif">Читать онлайн</h2>
            <p className="text-[#2C1810]/70 text-lg">
              Первые три главы доступны бесплатно
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-[#C9A961]/30 shadow-2xl overflow-hidden">
              <Tabs value={selectedChapter.toString()} onValueChange={(v) => setSelectedChapter(parseInt(v))}>
                <TabsList className="w-full justify-start border-b border-[#C9A961]/20 bg-[#F4E8D0]/50 p-6 rounded-none">
                  {chapters.map((chapter, index) => (
                    <TabsTrigger 
                      key={index} 
                      value={index.toString()}
                      className="data-[state=active]:bg-[#C9A961] data-[state=active]:text-[#FEF7E8] px-6 py-3"
                    >
                      Глава {chapter.number}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {chapters.map((chapter, index) => (
                  <TabsContent key={index} value={index.toString()} className="p-12">
                    <div className="space-y-8">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-[#C9A961] tracking-widest">ГЛАВА {chapter.number}</div>
                        <h3 className="text-4xl font-serif">{chapter.title}</h3>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <div className="text-[#2C1810] leading-relaxed text-justify space-y-4 text-lg">
                          {chapter.fullText.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#C9A961] first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-8 border-t border-[#C9A961]/20">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedChapter(Math.max(0, index - 1))}
                          disabled={index === 0}
                          className="border-[#2C1810]"
                        >
                          <Icon name="ChevronLeft" className="mr-2" />
                          Предыдущая глава
                        </Button>
                        <div className="text-sm text-[#2C1810]/60">
                          Глава {chapter.number} из {chapters.length}
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedChapter(Math.min(chapters.length - 1, index + 1))}
                          disabled={index === chapters.length - 1}
                          className="border-[#2C1810]"
                        >
                          Следующая глава
                          <Icon name="ChevronRight" className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>

            <Card className="mt-8 bg-gradient-to-r from-[#2C1810] to-[#4A3428] border-none text-[#FEF7E8]">
              <CardContent className="p-8 text-center space-y-4">
                <Icon name="Lock" size={48} className="mx-auto text-[#C9A961]" />
                <h3 className="text-2xl font-serif">Хотите прочитать всю книгу?</h3>
                <p className="text-[#FEF7E8]/80 max-w-xl mx-auto">
                  Полная версия содержит 15 захватывающих глав с неожиданной развязкой
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#C9A961] hover:bg-[#C9A961]/90 text-[#2C1810] mt-4"
                  onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Купить полную версию
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="author" className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/50 border-[#C9A961]/30 overflow-hidden">
              <div className="grid md:grid-cols-[300px,1fr] gap-0">
                <div className="bg-gradient-to-br from-[#2C1810] to-[#4A3428] p-8 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-4 border-[#C9A961] bg-[#F4E8D0] flex items-center justify-center">
                    <Icon name="User" size={80} className="text-[#C9A961]" />
                  </div>
                </div>
                <CardContent className="p-12 space-y-6">
                  <div>
                    <div className="text-sm text-[#C9A961] tracking-widest mb-2">ОБ АВТОРЕ</div>
                    <h2 className="text-4xl font-serif mb-4">Михаил Александров</h2>
                    <div className="text-[#2C1810]/70 space-y-4 leading-relaxed">
                      <p>
                        Историк по образованию, писатель по призванию. Более 15 лет изучает архивы старинных усадеб и особняков России, собирая истории и легенды.
                      </p>
                      <p>
                        "Тайна старого особняка" — его третий роман, основанный на реальных событиях, произошедших в одном из московских домов в начале XIX века.
                      </p>
                      <p className="italic">
                        "Каждый старинный дом хранит свои секреты. Моя задача — рассказать их миру, соединив историческую правду с художественным вымыслом."
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="sm" className="border-[#2C1810]">
                      <Icon name="Globe" className="mr-2" size={16} />
                      Сайт автора
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#2C1810]">
                      <Icon name="Mail" className="mr-2" size={16} />
                      Написать автору
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        <section id="reviews" className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-[#F4E8D0]/30">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-20 bg-[#C9A961]" />
              <Icon name="MessageSquare" size={32} className="text-[#C9A961]" />
              <div className="h-px w-20 bg-[#C9A961]" />
            </div>
            <h2 className="text-5xl font-serif">Отзывы читателей</h2>
            <div className="flex items-center justify-center gap-2">
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name="Star" size={24} className="fill-[#C9A961] text-[#C9A961]" />
              ))}
              <span className="ml-2 text-xl text-[#2C1810]/70">5.0 из 5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-[#C9A961]/20 hover:border-[#C9A961] transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-[#C9A961] text-[#C9A961]" />
                    ))}
                  </div>
                  <p className="text-[#2C1810]/80 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  <div className="pt-4 border-t border-[#C9A961]/20">
                    <div className="font-semibold">{review.author}</div>
                    <div className="text-sm text-[#2C1810]/60">{review.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="buy" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#2C1810] via-[#4A3428] to-[#2C1810] border-[#C9A961] border-2 text-[#FEF7E8] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A961]/10 rounded-full blur-3xl" />
              
              <CardContent className="p-12 relative z-10">
                <div className="text-center space-y-8">
                  <div>
                    <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-[#C9A961]" />
                    <h2 className="text-5xl font-serif mb-4">Приобрести книгу</h2>
                    <p className="text-[#FEF7E8]/80 text-lg max-w-2xl mx-auto">
                      Выберите удобный формат и начните читать прямо сейчас
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <Card className="bg-[#FEF7E8] border-[#C9A961] hover:scale-105 transition-transform cursor-pointer">
                      <CardContent className="p-6 text-center space-y-4">
                        <Icon name="BookOpen" size={40} className="mx-auto text-[#C9A961]" />
                        <div>
                          <div className="text-2xl font-bold text-[#2C1810] mb-1">₽599</div>
                          <div className="text-sm text-[#2C1810]/60">Электронная книга</div>
                        </div>
                        <Button className="w-full bg-[#C9A961] hover:bg-[#C9A961]/90 text-[#2C1810]">
                          Купить PDF
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#FEF7E8] border-[#C9A961] hover:scale-105 transition-transform cursor-pointer border-4">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="relative">
                          <Icon name="Book" size={40} className="mx-auto text-[#C9A961]" />
                          <div className="absolute -top-2 -right-2 bg-[#C9A961] text-[#2C1810] text-xs px-2 py-1 rounded">
                            ХИТ
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#2C1810] mb-1">₽899</div>
                          <div className="text-sm text-[#2C1810]/60">Твёрдый переплёт</div>
                        </div>
                        <Button className="w-full bg-[#2C1810] hover:bg-[#2C1810]/90 text-[#FEF7E8]">
                          Купить книгу
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#FEF7E8] border-[#C9A961] hover:scale-105 transition-transform cursor-pointer">
                      <CardContent className="p-6 text-center space-y-4">
                        <Icon name="Headphones" size={40} className="mx-auto text-[#C9A961]" />
                        <div>
                          <div className="text-2xl font-bold text-[#2C1810] mb-1">₽699</div>
                          <div className="text-sm text-[#2C1810]/60">Аудиокнига</div>
                        </div>
                        <Button className="w-full bg-[#C9A961] hover:bg-[#C9A961]/90 text-[#2C1810]">
                          Купить аудио
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 pt-6">
                    <div className="flex items-center gap-2 text-[#FEF7E8]/80">
                      <Icon name="Truck" size={20} className="text-[#C9A961]" />
                      <span className="text-sm">Бесплатная доставка</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FEF7E8]/80">
                      <Icon name="Shield" size={20} className="text-[#C9A961]" />
                      <span className="text-sm">Безопасная оплата</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FEF7E8]/80">
                      <Icon name="RotateCcw" size={20} className="text-[#C9A961]" />
                      <span className="text-sm">Возврат 14 дней</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="bg-[#2C1810] text-[#FEF7E8] py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center gap-2">
                <Icon name="BookOpen" size={32} className="text-[#C9A961]" />
                <span className="text-2xl font-serif">Тайна Старого Особняка</span>
              </div>
              <div className="flex gap-6">
                <Button variant="ghost" size="sm" className="text-[#FEF7E8] hover:text-[#C9A961]">
                  <Icon name="Mail" className="mr-2" size={16} />
                  Контакты
                </Button>
                <Button variant="ghost" size="sm" className="text-[#FEF7E8] hover:text-[#C9A961]">
                  <Icon name="FileText" className="mr-2" size={16} />
                  Для прессы
                </Button>
                <Button variant="ghost" size="sm" className="text-[#FEF7E8] hover:text-[#C9A961]">
                  <Icon name="HelpCircle" className="mr-2" size={16} />
                  FAQ
                </Button>
              </div>
              <div className="text-[#FEF7E8]/60 text-sm text-center">
                <p>© 2024 Михаил Александров. Все права защищены.</p>
                <p className="mt-2">Издательство "Старинные истории"</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
