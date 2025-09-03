import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              РЕЧЬ КАК <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">МЕЧ</span>
            </h1>
            <p className="text-xl lg:text-2xl font-medium mb-6 opacity-90">
              Овладейте техниками влиятельной речи, которая заставляет слушать и убеждает мгновенно
            </p>
            <p className="text-lg lg:text-xl mb-12 opacity-80 max-w-3xl mx-auto">
              Всего за 2 часа вы получите конкретные инструменты, которые сделают вашу речь магнитом для внимания и катализатором решений
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Icon name="Zap" className="mr-2" size={24} />
                ЗАПИСАТЬСЯ ЗА 1990 ₽
              </Button>
              <div className="text-white/80 text-sm">
                Стоимость ужина в кафе за навык, меняющий карьеру
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                Знакомая ситуация?
              </h2>
              <p className="text-2xl font-semibold text-red-600 mb-8">
                Разочарование после первого занятия
              </p>
            </div>
            
            <div className="space-y-6 mb-16">
              <Card className="p-6 bg-white border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="X" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">
                      Вместо практики речи — 2 часа с пробкой во рту, читая скороговорки
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="X" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">
                      Вместо техник влияния — упражнения на ковриках для йоги "для раскрепощения"
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="X" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">
                      Вместо авторских методик — те же упражнения, что вы видели на YouTube
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="X" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">
                      Тренер без харизмы — сам говорит монотонно, не излучает энергию лидера
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="X" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">
                      Театральная подача — красивые слова без практического результата
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-center">
              <div className="text-4xl mb-4">💸</div>
              <p className="text-xl text-gray-700 font-semibold">
                Вы потратили деньги, время, но изменений нет. Снова поиск "того самого" курса...
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Решение: Пробный практикум
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="UserCheck" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Приходите на пробное занятие</h3>
                <p className="text-gray-600 text-lg">
                  Я не буду продавать вам курс
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Почувствуйте результат</h3>
                <p className="text-gray-600 text-lg">
                  Изменения в речи за 2 часа
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Сами решите</h3>
                <p className="text-gray-600 text-lg">
                  Подходит ли вам мой метод для полного погружения
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Eye" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Увидите разницу</h3>
                <p className="text-gray-600 text-lg">
                  Между театральностью и реальной эффективностью
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Превратите речь в <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">оружие успеха</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Через 2 часа вы будете владеть техниками, которые изучают годами. Начните менять жизнь прямо сейчас.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-md mx-auto">
              <div className="text-6xl font-bold text-white mb-2">1990 ₽</div>
              <div className="text-white/80 text-lg">Полный тренинг • 2 часа • Результат навсегда</div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Icon name="Sword" className="mr-3" size={28} />
              ПОЛУЧИТЬ РЕЧЬ КАК МЕЧ
            </Button>
            
            <div className="flex items-center justify-center gap-8 mt-12 text-white/70">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span>2 часа интенсива</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} />
                <span>Гарантия результата</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span>Проверено экспертами</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;