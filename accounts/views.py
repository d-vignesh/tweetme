from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm 
from django.contrib.auth import login, logout 

def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user_ = form.get_user()
        login(request, user_)
        return redirect('/')
    context = {
        'form': form,
        'btn_label': 'login',
        'title': 'login'
    }
    return render(request, 'accounts/auth.html', context)

def logout_view(request, *args, **kwargs):
    if request.method == 'POST':
        logout(request)
        return redirect('/')
    context = {
        'form': None,
        'description': 'are you sure you want to logout?',
        'btn_label': 'confirm',
        'title': 'logout'
    }
    return render(request, 'accounts/auth.html', context)

def register_view(request, *args, **kwargs):
    form = UserCreationForm(data=request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        user.set_password(form.cleaned_data.get('password1'))
        login(request, user)
        return redirect('/')

    context = {
        'form': form,
        'btn_label': 'register',
        'title': 'register'
    }
    return render(request, 'accounts/auth.html', context)   

