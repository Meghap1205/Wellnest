function toggleContent(sectionId) {
            const contentSection = document.getElementById(sectionId);
            const content = contentSection.querySelector('.expandable-content');
            const readMoreLink = contentSection.querySelector('.read-more-link');

            if (content.classList.contains('open')) {
                content.classList.remove('open');
                readMoreLink.innerText = 'Read more';
            } else {
                content.classList.add('open');
                readMoreLink.innerText = 'Read less';
            }
        }