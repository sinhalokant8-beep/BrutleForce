from django.shortcuts import render
from .forms import UserForm


def login_view(request):
    return render(request, 'html/index.html')


def login(request):

    if request.method == 'POST':

        form = UserForm(request.POST)

        if form.is_valid():

            form.save()

            username = request.POST.get('username')
            password = request.POST.get('password')

            # Admin login check
            if username == 'admin123' and password == 'admin123':
                return render(
                    request,
                    'html/admin.html',
                    {
                        'username': username,
                        'password': password
                    }
                )

            # Normal user
            return render(
                request,
                'html/success.html',
                {
                    'username': username,
                    'password': password,
                }
            )

        else:
            return render(
                request,
                'html/index.html',
                {
                    'error': 'Invalid form data'
                }
            )

    return render(request, 'html/index.html')