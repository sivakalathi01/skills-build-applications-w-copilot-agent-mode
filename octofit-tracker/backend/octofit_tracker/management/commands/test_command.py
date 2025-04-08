from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Test command to verify management/commands discovery'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Test command executed successfully.'))
