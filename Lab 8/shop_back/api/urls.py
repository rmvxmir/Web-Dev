from django.urls import path
from .views import list_products, get_product, list_categories, get_category, list_products_by_category

urlpatterns = [
    path('products/', list_products, name='list_products'),
    path('products/<int:id>/', get_product, name='get_product'),
    path('categories/', list_categories, name='list_categories'),
    path('categories/<int:id>/', get_category, name='get_category'),
    path('categories/<int:id>/products/', list_products_by_category, name='list_products_by_category'),
]
