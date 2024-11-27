from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.http import HttpResponse 
from .views import CategoryViewSet, PostViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'posts', PostViewSet, basename='post')

# Função para a página inicial
def home(request):
    return HttpResponse("Bem-vindo ao Gamer Blog! Acesse /api/ para explorar as APIs.")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', home, name='home'),  # Adicione esta linha para a rota raiz
]
